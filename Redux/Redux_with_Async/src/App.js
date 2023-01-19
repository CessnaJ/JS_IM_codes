import { useSelector, useState, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  // useSelector 객체가 redux구독하니까, store상태변하면 App함수가 재실행 ->최신상태됨.

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending..",
          message: "sending cart data",
        })
      );
      // 보내면서 dispatch. 일단 비동기로 보내기만 하는거니까status:pending
      const response = await fetch("baseURL", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      const responseData = await response.json();
    };
  }, [cart]);

  if (!response.ok) {
    // throw new Error("sending cart data failed");
    //이거 대신..
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error!!",
        message: "Sending cart data failed!!",
      })
    );
  }

  dispatch(
    uiActions.showNotification({
      status: "success",
      title: "Success!!",
      message: "Sent card data successfully",
    })
  );

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
