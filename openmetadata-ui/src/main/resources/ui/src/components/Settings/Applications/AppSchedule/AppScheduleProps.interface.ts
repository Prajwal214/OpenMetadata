/*
 *  Copyright 2023 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { RJSFSchema } from '@rjsf/utils';
import { App } from '../../../../generated/entity/applications/app';

export interface AppScheduleProps {
  appData: App;
  loading: {
    isRunLoading: boolean;
    isDeployLoading: boolean;
  };
  jsonSchema: RJSFSchema;
  onSave: (cron: string) => Promise<void>;
  onDemandTrigger: () => Promise<void>;
  onDeployTrigger: () => Promise<void>;
}
