// import Cookie from 'js-cookie';


// // for getting a log of the cart you should use JSON.parse(decodeURIComponent(cart))

// export const addToCart = (id: string): void => {
//     try {
//       const cart = JSON.parse(Cookie.get('cart') || '{}');
//       cart[id] = cart[id] || { q: 1 };
//       if (cart[id]) {
//         cart[id].q += 1;
//       }
//       Cookie.set('cart', JSON.stringify(cart), { path: '/' });
//     } catch (error) {
//       const cart: { [key: string]: { q: number } } = { [id]: { q: 1 } };
//       Cookie.set('cart', JSON.stringify(cart), { path: '/' });
//     }
// };
// export const removeFromCart = (id: string): void => {
//   try {
//     const cart = JSON.parse(decodeURIComponent(Cookie.get('cart') || '{}'));

//     if (cart[id].q === 1) {
//       delete cart[id];
//     } else {
//       cart[id].q -= 1;
//     }

//     Cookie.set('cart', encodeURIComponent(JSON.stringify(cart)), { path: '/' });
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//   }
// };

