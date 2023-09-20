const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


function buyCake() {
    return (
     {
         type: BUY_CAKE,
         info: "first redux action",
     }
    );
 }
 

 function buyIceCream() {
    return (
     {
         type: BUY_ICECREAM,
         info: "second redux action",
     }
    );
 }
// const initialState ={
//     numberOfCakes: 10,
//     numberOfIcecreams : 15,
// }
const initialStateCake={
    numberOfCakes: 10,
}
const initialStateIceCream={
    numberOfIcecreams : 15,
}

// const reducer =(state=initialState, action)=>{
//     switch(action.type){
//         case "BUY_CAKE":
//             return{
//                 ...state,
//                 numberOfCakes :state.numberOfCakes -1,
//             };
//         case "BUY_ICECREAM":
//             return{
//                 ...state,
//                 numberOfIcecreams : state.numberOfIcecreams -1
//             }
//             default:
//                 return state
//     }
// }

const cakereducer =(state=initialStateCake, action)=>{
    switch(action.type){
        case "BUY_CAKE":
            return{
                ...state,
                numberOfCakes :state.numberOfCakes -1,
            };
            default:
                return state
    }
}

const iceCreamreducer =(state=initialStateIceCream, action)=>{
    switch(action.type){
      
        case "BUY_ICECREAM":
            return{
                ...state,
                numberOfIcecreams : state.numberOfIcecreams -1
            }
            default:
                return state
    }
}

const rootReducer =combineReducers({
    cake:cakereducer,
    iceCream: iceCreamreducer
})

const  store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();
