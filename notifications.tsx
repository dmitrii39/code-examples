import * as api from '.';
import ApiRequest from './urls';

export const getNotifications = async () => {
  const response = await api.get(ApiRequest.notifications);
  if (response?.error) {
    return response;
  } else {
    const notifications = response?.data?.data?.notifications;
    console.log('notificationsss', notifications);
    return {notifications};
  }
};

export const readNotification = (notification_ids: any) => {
  return api.post(ApiRequest.notificationRead, {notification_ids});
};
