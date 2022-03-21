import { NotificationSettingsModel } from './notification-settings-model';

export interface UserModel {
  id: string;
  companyId: string;
  email: string;
  firstName: string;
  lastName: string;
  notificationSettings: NotificationSettingsModel;
}
