import { createPureSrc } from 'pure-src'
import { fetchDeliveryMethod, jsonHeaders } from 'pure-src/deliveryMethods/fetch'
import { fetchDeliveryGetOptions } from 'pure-src/deliveryMethods/fetch'

import { restGetRequest } from 'pure-src/repositories/rest'

import credentialsIncludeOptions from './options/credentialsIncludeOptions';
import { API_ADDRESS } from './data';

import mapCategoryDTOToCategory from '../../mapToEntities/mapCategoryDTOToCategory'

// Create the repository

const categoryRepository = createPureSrc(
  `${API_ADDRESS}/categories`,
  fetchDeliveryMethod,
  mapCategoryDTOToCategory);

// Create the repository methods

export const categoryGetRequest = categoryRepository(restGetRequest, credentialsIncludeOptions(fetchDeliveryGetOptions(jsonHeaders())));