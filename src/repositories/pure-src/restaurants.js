import { createPureSrc } from 'pure-src'
import { fetchDeliveryMethod, jsonHeaders } from 'pure-src/deliveryMethods/fetch'
import { fetchDeliveryGetOptions } from 'pure-src/deliveryMethods/fetch'

import { restGetRequest } from 'pure-src/repositories/rest'

import credentialsIncludeOptions from './options/credentialsIncludeOptions';
import { API_ADDRESS } from './data';

import mapRestaurantDTOToRestaurant from '../../mapToEntities/mapRestaurantDTOToRestaurant'

// Create the repository

console.log(`${API_ADDRESS}/restaurant`);

const restaurantRepository = createPureSrc(
  `${API_ADDRESS}/restaurant`,
  fetchDeliveryMethod,
  mapRestaurantDTOToRestaurant);

// Create the repository methods

export const restaurantGetRequest = restaurantRepository(restGetRequest, credentialsIncludeOptions(fetchDeliveryGetOptions(jsonHeaders())));