// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {cloudprofiler_v2} from './v2';

export const VERSIONS = {
  'v2': cloudprofiler_v2.Cloudprofiler,
};

export function cloudprofiler(version: 'v2'): cloudprofiler_v2.Cloudprofiler;
export function cloudprofiler(options: cloudprofiler_v2.Options):
    cloudprofiler_v2.Cloudprofiler;
export function cloudprofiler<T = cloudprofiler_v2.Cloudprofiler>(
    this: GoogleConfigurable, versionOrOptions: 'v2'|cloudprofiler_v2.Options) {
  return getAPI<T>('cloudprofiler', versionOrOptions, VERSIONS, this);
}
