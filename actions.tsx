import * as api from '.';
import ApiRequest from './urls';

export const getQuickActions = async () => {
  const response = await api.get(ApiRequest.actionsQuick);
  if (response?.error) {
    return response;
  } else {
    const actions = response?.data?.data.actions;
    // const services = res.filter(item => item.type === filter);
    console.log('actionsQuick', actions);
    return actions;
  }
};

export const getGeneralActions = async () => {
  const response = await api.get(ApiRequest.actionGeneral);
  if (response?.error) {
    return response;
  } else {
    const actions = response?.data?.data.actions;
    console.log('actionsGeneral', actions);
    return actions;
  }
};
