const initialData = {
  currentCategory: 1,
  currentProducts: [],
  cart: [],
};

const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_CART_SUCCESS = "GET_CART_SUCCESS";
const ADD_CART = "ADD_CART";

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, currentProducts: action.payload };
    case ADD_CART:
      return { ...state, cart: action.payload };
    case GET_CART_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const changeCategoryAction = (id) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: id,
  });
};

export const addCartAction =
  ({ id, nom, price, image }) =>
  (dispatch, getState) => {
    const { cart } = getState().product;
    console.log(cart);
    const singleProduct = {
      id: id,
      name: nom,
      price: price,
      image: image,
    };
    cart.push(singleProduct);
    saveStorage(getState());
    dispatch({
      type: ADD_CART,
      payload: [...cart],
    })
  };

/**
 * function that restore the state with the storage information
 */
export const getCartAction = (cart) => (dispatch, getState) => {
  console.log(cart)
  dispatch({
    type: GET_CART_SUCCESS,
    payload: cart,
  });
};

export const getProductsAction = (id, products) => (dispatch, getState) => {
  let result = {};
  // console.log(getState());
  switch (id) {
    case 1:
      result = {
        products: products,
      };
      break;
    case 2:
      result = {
        products: products.filter((product) => {
          return product.name.includes("pizza");
        }),
      };
      break;
    case 3:
      result = {
        products: products.filter((product) => {
          return product.id === 6 || product.id === 4;
        }),
      };
      break;
    case 4:
      result = {
        products: products.filter((product) => {
          return product.id === 8;
        }),
      };
      break;
    case 5:
      result = {
        products: products.filter((product) => {
          return product.id === 1 || product.id === 7;
        }),
      };
      break;
    case 6:
      result = {
        products: products.filter((product) => {
          return product.id === 5;
        }),
      };
      break;
    case 7:
      result = {
        products: products.filter((product) => {
          return product.id === 3 || product.id === 6 || product.id === 2;
        }),
      };
      break;
    case 8:
      result = {
        products: products.filter((product) => {
          return product.id === 10;
        }),
      };
      break;
    default:
      result = {
        products: products,
      };
  }
  dispatch({
    type: GET_PRODUCTS_SUCCESS,
    payload: result.products,
  });
};

/**
 * Auxiliar function to save the redux state to the storage
 * @param {*} storage
 */
const saveStorage = (storage) => {
  localStorage.storage = JSON.stringify(storage);
};
