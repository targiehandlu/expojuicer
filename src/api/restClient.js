
import eventjuicerApiClient from './eventjuicerApiClient'
import {fetchUtils } from 'admin-on-rest';
import get from 'lodash/get';

const httpClient = (url, options = {}) => {

    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }


  //  const profiles = JSON.parse(localStorage.getItem('profiles'));


    //temporary...get the first token registered
  //  const token = Object.keys(profiles)[0];

//  const token = "baac3696effef01798d95584e60ebf756197288f";

    const token = "asd";

    options.headers.set('x-token', `${token}`);

    return fetchUtils.fetchJson(url, options);
}

const restClient = eventjuicerApiClient('https://api.eventjuicer.com.local/v1/restricted', httpClient);

export {httpClient};

export default restClient;
