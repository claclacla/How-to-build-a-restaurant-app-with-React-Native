import * as CategoriesRepository from '../../../src/repositories/api/categories';
import CategoriesDataProvider from '../../../src/dataProviders/api/CategoriesDataProvider';

import Category from '../../../src/entities/Category';

test('CategoriesDataProvider', async () => {
  let category = new Category({ 
    uid: "jU8rfl4r",
    name: "Category name" 
  });

  CategoriesRepository.categoryGetRequest = jest.fn();
  CategoriesRepository.categoryGetRequest.mockReturnValue([category]);

  let resCategories = await CategoriesDataProvider.getCategories();

  expect(resCategories).toBeInstanceOf(Array);
  expect(resCategories).toHaveLength(1);

  let resCategory = resCategories[0];

  expect(resCategory).toHaveProperty("uid");
  expect(resCategory).toHaveProperty("name");

  expect(resCategory.uid).toEqual(category.uid);
  expect(resCategory.name).toEqual(category.name);
});