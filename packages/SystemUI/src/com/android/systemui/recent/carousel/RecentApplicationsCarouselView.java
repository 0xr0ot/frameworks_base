/*
 * Copyright (C) 2010 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.android.systemui.recent.carousel;

import android.content.Context;
import android.util.AttributeSet;

import com.android.ex.carousel.CarouselView;
import com.android.systemui.R;

public class RecentApplicationsCarouselView extends CarouselView {

    public RecentApplicationsCarouselView(Context context) {
        this(context, null);
    }

    public RecentApplicationsCarouselView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public Info getRenderScriptInfo() {
        return new Info(R.raw.carousel);
    }

}