const getDataLS = () => {
  const storeStringData = localStorage.getItem("Donate");
  if (storeStringData) {
    return JSON.parse(storeStringData);
  }
  return [];
};

const addToLS = (id) => {
  const cart = getDataLS();
  cart.push(id);
  saveDataLS(cart);
};

const saveDataLS = (cart) => {
  const stringStringify = JSON.stringify(cart);
  localStorage.setItem("Donate", stringStringify);
};
 export { addToLS , getDataLS, };  