import { Item, ProductDto, ProductList } from "../models/interface/Product";

const formatPrice = (amount: number | string, currency: string): string => {
  // Convierte el monto a número, asegurándose de manejar tanto cadenas como números
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;

  // Crear una instancia de Intl.NumberFormat con opciones dinámicas
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
    // Elimina los dígitos decimales si son ceros
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numericAmount);
};

export const productAdapter = (products: ProductList) => {
  console.log(products, "adapter");
  return {
    ...products,
    items: products?.items?.map((item: ProductDto) => ({
      ...item,
      price: formatPrice(item.price.amount, item.price.currency),
    })),
  };
};

export const productDetailAdapter = (product: Item) => {
  const data = {
    id: product.id,
    title: product.title,
    categoryId: product.category.id,
    price: formatPrice(product.price.amount, product.price.currency),
    picture: product.picture,
    condition: product.condition,
    freeShipping: product.free_shipping,
    soldQuantity: product.sold_quantity,
    description: product.description, // Se as
  };

  return data
};
