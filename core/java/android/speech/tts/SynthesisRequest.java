/*
 * Copyright (C) 2011 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package android.speech.tts;

/**
 * A request for speech synthesis given to a TTS engine for processing.
 *
 * @hide Pending approval
 */
public abstract class SynthesisRequest {

    private final String mText;
    private String mLanguage;
    private String mCountry;
    private String mVariant;
    private int mSpeechRate;
    private int mPitch;

    public SynthesisRequest(String text) {
        mText = text;
    }

    /**
     * Sets the locale for the request.
     */
    void setLanguage(String language, String country, String variant) {
        mLanguage = language;
        mCountry = country;
        mVariant = variant;
    }

    /**
     * Sets the speech rate.
     */
    void setSpeechRate(int speechRate) {
        mSpeechRate = speechRate;
    }

    /**
     * Sets the pitch.
     */
    void setPitch(int pitch) {
        mPitch = pitch;
    }

    /**
     * Gets the text which should be synthesized.
     */
    public String getText() {
        return mText;
    }

    /**
     * Gets the ISO 3-letter language code for the language to use.
     */
    public String getLanguage() {
        return mLanguage;
    }

    /**
     * Gets the ISO 3-letter country code for the language to use.
     */
    public String getCountry() {
        return mCountry;
    }

    /**
     * Gets the language variant to use.
     */
    public String getVariant() {
        return mVariant;
    }

    /**
     * Gets the speech rate to use. {@link TextToSpeech.Engine#DEFAULT_RATE} (100)
     * is the normal rate.
     */
    public int getSpeechRate() {
        return mSpeechRate;
    }

    /**
     * Gets the pitch to use. {@link TextToSpeech.Engine#DEFAULT_PITCH} (100)
     * is the normal pitch.
     */
    public int getPitch() {
        return mPitch;
    }

    /**
     * Aborts the speech request.
     *
     * Can be called from multiple threads.
     */
    abstract void stop();

    /**
     * The service should call this when it starts to synthesize audio for this
     * request.
     *
     * This method should only be called on the synthesis thread,
     * while in {@link TextToSpeechService#onSynthesizeText}.
     *
     * @param sampleRateInHz Sample rate in HZ of the generated audio.
     * @param audioFormat Audio format of the generated audio. Must be one of
     *         the ENCODING_ constants defined in {@link android.media.AudioFormat}.
     * @param channelCount The number of channels
     * @return {@link TextToSpeech#SUCCESS} or {@link TextToSpeech#ERROR}.
     */
    public abstract int start(int sampleRateInHz, int audioFormat, int channelCount);

    /**
     * The service should call this method when synthesized audio is ready for consumption.
     *
     * This method should only be called on the synthesis thread,
     * while in {@link TextToSpeechService#onSynthesizeText}.
     *
     * @param buffer The generated audio data. This method will not hold on to {@code buffer},
     *         so the caller is free to modify it after this method returns.
     * @param offset The offset into {@code buffer} where the audio data starts.
     * @param length The number of bytes of audio data in {@code buffer}.
     *         Must be less than or equal to {@code buffer.length - offset}.
     * @return {@link TextToSpeech#SUCCESS} or {@link TextToSpeech#ERROR}.
     */
    public abstract int audioAvailable(byte[] buffer, int offset, int length);

    /**
     * The service should call this method when all the synthesized audio for a request has
     * been passed to {@link #audioAvailable}.
     *
     * This method should only be called on the synthesis thread,
     * while in {@link TextToSpeechService#onSynthesizeText}.
     *
     * @return {@link TextToSpeech#SUCCESS} or {@link TextToSpeech#ERROR}.
     */
    public abstract int done();

}