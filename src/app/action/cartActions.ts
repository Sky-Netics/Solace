import Cookie from 'js-cookie';

export const addToCart = (id: string):void => {
  try {
    let cart = JSON.parse(Cookie.get('cart') || '{}');
    if (!cart[id]) {
      cart[id] = { 'q': 1 };
    } else {
      cart[id]['q'] += 1;
    }
    Cookie.set('cart', JSON.stringify(cart), { path: '/' });
  } catch (error) {
    let cart: { [key: string]: { q: number } } = { [id]: { 'q': 1 } };
    Cookie.set('cart', JSON.stringify(cart), { path: '/' });
  }
};

export const removeFromCart = (id:string):void =>{
    let cart = JSON.parse(Cookie.get('cart') || '{}');
        if (cart[id]['q'] == '1'){
            delete cart[id]
        }else{
            cart[id]['q'] -= 1
        }
        document.cookie = "cart=" + JSON.stringify(cart) + ";path=/";
}
