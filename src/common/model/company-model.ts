import { NotificationSettingsModel } from './notification-settings-model';

export interface CompanyModel {
  id: string;
  name: string;
  notificationSettings: NotificationSettingsModel;
}
