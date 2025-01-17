export function sortData(products, sortBy, priceRange, sortByRating) {
  switch (sortBy) {
    case "CLEAR":
      products = products;
    case "LOW_TO_HIGH":
      products = products.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      break;
    case "HIGH_TO_LOW":
      products = products.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      break;
    default:
      products = products;
  }
  if (sortByRating) {
    products = products.filter((item) => item.rating >= sortByRating);
  }
  if (priceRange) {
    products = products.filter((item) => item.price <= +priceRange);
  }
  return products;
}

const unionCategory = (...arr) => {
  const data = arr.reduce((acc, curr) => {
    return acc.concat(
      curr.filter((el) => !acc.some((ele) => ele._id === el._id))
    );
  }, []);
  return data;
};

export function filterData(products, category) {
  let filterProducts = [];
  let flag = false;
  for (const cat in category) {
    if (category[cat]) {
      flag = true;
      filterProducts = unionCategory(
        filterProducts,
        products.filter((ele) => ele.category === cat)
      );
    }
  }
  return flag ? filterProducts : products;
}

export function searchProduct(products, search) {
  return search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;
}
