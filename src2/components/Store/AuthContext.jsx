import { createContext, useEffect, useState } from "react";
import { fs, auth } from "../config/FirebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              console.log(snapshot.data());
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();
  console.log(user);

  const getUserId = () => {
    const [uId, setUId] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUId(user.uid);
        }
      });
    }, []);

    return uId;
  };

  const uId = getUserId();
  let Product;
  const addToCart = (product) => {
    if (uId === null) {
      navigate("/login");
    } else {
      Product = product;
      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("cart" + uId)
        .doc(product.ID)
        .set(Product)
        .then(() => {
          console.log("successfully added to cart");
        });
      console.log(product);
      console.log("uid", uId);
    }
  };

  // show the cart items
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("cart" + user.uid).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("User is not signed to reterive the cart items");
      }
    });
  }, []);

  // cart product increase
  const cartProudctIncrease = (product) => {
    // console.log(product)
    Product = product;
    // increase the qty
    Product.qty += 1;
    // update the total amount
    Product.TotalProductPrice = Product.qty * Product.price;
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("cart" + user.uid)
          .doc(product.ID)
          .update(Product);
      } else {
        console.log("user is not logged in to increase the cart qty");
      }
    });
  };
  const cartProudctDecrease = (product) => {
    // console.log(product)
    Product = product;
    // increase the qty
    if (Product.qty > 1) {
      Product.qty -= 1;
      Product.TotalProductPrice = Product.qty * Product.price;
    }
    // update the total amount
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("cart" + user.uid)
          .doc(product.ID)
          .update(Product);
      } else {
        console.log("user is not logged in to decrease the cart qty");
      }
    });
  };

  const deleteCartHandler = (cartProduct) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fs
          .collection("cart" + user.uid)
          .doc(cartProduct.ID)
          .delete();
        console.log("successfully deleted cart");
      } else {
        console.log("user is not logged to delete the cart item");
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        addToCart,
        cartProducts,
        cartProudctIncrease,
        cartProudctDecrease,
        deleteCartHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
