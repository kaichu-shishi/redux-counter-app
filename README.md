# Redux　と　Redux Toolkit　を使用した計数アプリ


## このアプリを作成した目的
- Reduxによるグローバルな状態管理について学ぶため
- グローバルな状態管理をする際に必要な以下の要素について理解するため
  - ①Store（およびその内部のStateとReducer）
  - ②ActionとDispatch
  - ③Action Creator
  - ④Slice（StateとReducerとAction Creatorをまとめたもの）


## 技術面のメモ
- 「src > redux > counterSlice.js」ではSliceを作成し、その中身のActionとReducerをエクスポートした。
- その際にRedux ToolkitのcreateSlice関数を用いた。
  - createSlice関数とは、Sliceを手軽に作成するための関数である。

- 状態管理を担うStoreについては「src > redux > store.js」でコンポーネントを作成し、store変数に代入してエクスポートした。
- その際にRedux ToolkitのconfigureStore関数を用いた。
  - configureStore関数とは、Storeを手軽に作成するための関数である。
  - configureStore関数内で上記でエクスポートしたReducerを使用している。

- 「src > index.js」ではReduxのProviderという機能を使用している。
- コードではAppコンポーネントをProviderで囲いつつ「store={store}」を記述した。
  - これによりアプリケーション内のすべてのコンポーネントからstore変数にアクセスすることが可能になる。

- 「src > App.js」で実際の計数アプリ画面を作成した。
- その際にReduxの関数を二つ用いた。
  - 一つはStateにアクセスするためのhooksであるuseSelector関数
  - もう一つはActionをStoreに通知するためのhooksであるuseDispatch関数である
- ローカルの状態（input欄に入力される数字）についてはuseStateで管理した。


## 参考記事など
- 下記のYouTube動画をもとにアプリ制作を進めた。
- https://www.youtube.com/watch?v=KuRu5wOyY_c&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB
