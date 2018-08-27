import Restaurant from '../entities/Restaurant';

// TODO: Add check for restaurantDto type

export default function mapRestaurantDTOToRestaurant(restaurantDto) {
  let restaurant = new Restaurant({ uid: restaurantDto.uid, name: restaurantDto.name });

  return restaurant;
}