const initialState = {
  greenTea: 0,
  masalaTea: 0,
  gingerTea: 0,
  totalPrice: 0,
  gingerTeaPrice: 20,
  greenTeaPrice: 30,
  masalaTeaPrice: 15,
};
const TeaReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "MORE_TEA":
      let teaTyp = (state[action.payload] = state[action.payload] + 1);
      if (action.payload === "greenTea") {
        state.totalPrice += state.greenTeaPrice;
      } else if (action.payload === "gingerTea") {
        state.totalPrice += state.gingerTeaPrice;
      } else {
        state.totalPrice += state.masalaTeaPrice;
      }
      return {
        ...state,
      };

    case "LESS_TEA":
      // state[action.payload]==0 ? action.payload=0:state[action.payload] -= state[action.payload];
      const tPrice = { ...state };
      const counttea = { ...state };
      counttea[action.payload] == 0
        ? (state[action.payload] = 0)
        : (state[action.payload] = counttea[action.payload] - 1);

      if (action.payload === "greenTea") {
        tPrice.totalPrice == 0
          ? (state.totalPrice = 0)
          : (state.totalPrice = tPrice.totalPrice - state.greenTeaPrice);
        // state.totalPrice = tPrice.totalPrice - state.greenTeaPrice;
      } else if (action.payload === "gingerTea") {
        tPrice.totalPrice == 0
          ? (state.totalPrice = 0)
          : (state.totalPrice = tPrice.totalPrice - state.greenTeaPrice);
      } else {
        tPrice.totalPrice == 0
          ? (state.totalPrice = 0)
          : (state.totalPrice = tPrice.totalPrice - state.greenTeaPrice);
      }
      return { ...state };
    default:
      return state;
  }
};

export default TeaReducer;
