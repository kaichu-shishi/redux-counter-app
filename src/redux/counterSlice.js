import { createSlice } from "@reduxjs/toolkit";



//Sliceとは、①State ②Reducer ③ActionCreator を三つまとめたもの
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        //各Reducerを作り終わったら、それと同名のActionCreatorが裏で自動的に作成される（redux toolkitが裏で作成してくれる）
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

//疑問：なぜ上でcounterSliceをexportしているのにもかかわらず、わざわざ中身をもう一度exportするのか？
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;