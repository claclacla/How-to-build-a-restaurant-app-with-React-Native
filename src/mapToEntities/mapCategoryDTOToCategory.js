import Category from '../entities/Category';

// TODO: Add check for categoryDto type

export default function mapCategoryDTOToCategory(categoryDto) {
  let category = new Category({ uid: categoryDto.uid, name: categoryDto.name });

  return category;
}