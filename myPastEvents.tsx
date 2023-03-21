import * as api from '.';
import ApiRequest from './urls';



export const getMyPastvents = async () => {
  const response = await api.get(ApiRequest.myPastEvents);
  if (response?.error) {
    return response;
  } else {
    const myPastEvents = response?.data?.data.events;
    console.log('events', myPastEvents);
    return myPastEvents;
  }
};
