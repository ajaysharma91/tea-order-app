const initialState = {
    fullName:'ajay',
    contact:'80900',
    checkout:false
}

const CheckoutReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'CHECKOUT':
            console.log("reducer");
            state.fullName = action.payload.fullName;
            state.contact = action.payload.contact;
            return {
                ...state,checkout:true
            }
            default:
                return {...state}
    }
}

export default CheckoutReducer;