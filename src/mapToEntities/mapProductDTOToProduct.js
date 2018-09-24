import Product from '../entities/Product';

// TODO: Add check for productDto type

export default function mapProductDTOToProduct(productDto) {
  let product = new Product({ uid: productDto.uid, name: productDto.name });

  return product;
}