import { configureStore } from "@reduxjs/toolkit";
//export defaultした「counterSlice.reducer」をcounterReducerという名前で使いますよ、ということ？
import counterReducer from "./counterSlice";



//store変数はどのコンポーネントでも共有できるようにする
//configureStore();はStoreを簡単に作ることができる関数
export const store = configureStore({
    //Reducerは、Stateを更新するための裏側の仕組み
    reducer: {
        counter: counterReducer,
    },
});