import { createPureSrc } from 'pure-src'
import { fetchDeliveryMethod, jsonHeaders } from 'pure-src/deliveryMethods/fetch'
import { fetchDeliveryGetOptions } from 'pure-src/deliveryMethods/fetch'

import { restGetRequest } from 'pure-src/repositories/rest'

import credentialsIncludeOptions from './options/credentialsIncludeOptions';
import { API_ADDRESS } from './data';

import mapProductDTOToProduct from '../../mapToEntities/mapProductDTOToProduct'

// Create the repository

const productRepository = createPureSrc(
  `${API_ADDRESS}/products`,
  fetchDeliveryMethod,
  mapProductDTOToProduct);

// Create the repository methods

export const productGetRequest = productRepository(restGetRequest, credentialsIncludeOptions(fetchDeliveryGetOptions(jsonHeaders())));