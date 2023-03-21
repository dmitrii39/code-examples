import * as api from '.';
import ApiRequest from './urls';

export const getmaintenanceType = async () => {
  const response = await api.get(ApiRequest.maintenanceType);
  if (response?.error) {
    console.log(response?.error);
    return response;
  } else {
    const maintenanceType = response?.data?.data;
    console.log('maintenanceType', maintenanceType);
    return {maintenanceType};
  }
};

export const getMaintenanceRequests = async () => {
  const response = await api.get(ApiRequest.maintenanceRequests);
  if (response?.error) {
    return response;
  } else {
    const requests = response?.data?.data;
    console.log('requestssss', requests);
    return requests;
  }
};

export const postMaintenanceRequest = async (
  name: string,
  address: string,
  maintenance_type: string,
  comments?: string,
  callback_number?: string,
  permission_to_enter?: string,
) => {
  const response = await api.post(ApiRequest.maintenanceRequest, {
    name,
    address,
    maintenance_type,
    comments,
    callback_number,
    permission_to_enter,
  });
  if (response?.error) {
    // return response;
    console.log('responseError', response.error);
    throw response.error;
  } else {
    const data = response?.data?.data;
    console.log('POSTMaintenanceRequest', data);
    return data;
  }
};

export const editMaintenanceRequest = async (
  id: string,
  name: string,
  address: string,
  maintenance_type: string,
  comments?: string,
  callback_number?: string,
  permission_to_enter?: string,
) => {
  const response = await api.put(ApiRequest.editMaintenanceRequestId(id), {
    name,
    address,
    maintenance_type,
    comments,
    callback_number,
    permission_to_enter,
  });
  if (response?.error) {
    // return response;
    console.log('responseError', response.error);
    throw response.error;
  } else {
    const data = response?.data?.data;
    console.log('dataEditMaintenance', data);
    return data;
  }
};
