const initialState = {
  greenTea: 0,
  masalaTea: 0,
  gingerTea: 0,
  totalPrice: 0,
  gingerTeaPrice: 20,
  greenTeaPrice: 30,
  masalaTeaPrice: 15,
  order:false
};
const TeaReducer = (state = initialState, action) => {
  console.log(state.order); 
  switch (action.type) {
    
    case "MORE_TEA":
      if(!state.order){
        state={
          greenTea: 0,
          masalaTea: 0,
          gingerTea: 0,
          totalPrice: 0,
          gingerTeaPrice: 20,
          greenTeaPrice: 30,
          masalaTeaPrice: 15,
          order:false
        };
        state.order=true;
      }
      console.log("Reducer "+state[action.payload])
     
      if (action.payload === "greenTea") {
       ++state.greenTea;
        state.totalPrice += state.greenTeaPrice;
      } else if (action.payload === "gingerTea") {
        ++state.gingerTea;

        state.totalPrice += state.gingerTeaPrice;
      } else if (action.payload === "masalaTea") {
        ++state.masalaTea;
        state.totalPrice += state.masalaTeaPrice;
      }
      console.log(state.greenTea);
      return {
        ...state,
      };

    case "LESS_TEA":
      state.order=true;
      const tPrice = { ...state };
      const counttea = { ...state };
      counttea[action.payload] == 0
        ? (state[action.payload] = 0)
        : (state[action.payload] = counttea[action.payload] - 1);

      if (action.payload === "greenTea") {
        (tPrice.totalPrice==0 || tPrice.greenTea==0)
          ? (state.totalPrice = tPrice.totalPrice)
          : (state.totalPrice = tPrice.totalPrice - state.greenTeaPrice);
      } else if (action.payload === "gingerTea") {
        tPrice.totalPrice==0 || tPrice.gingerTea==0
          ? (state.totalPrice = tPrice.totalPrice)
          : (state.totalPrice = tPrice.totalPrice - state.gingerTeaPrice);
      } else {
        tPrice.totalPrice==0 || tPrice.masalaTea==0
          ? (state.totalPrice = tPrice.totalPrice)
          : (state.totalPrice = tPrice.totalPrice - state.masalaTeaPrice);
      }
      return { ...state };
    default:
      return {...state,order:false};
  }
};

export default TeaReducer;
