import { data } from 'autoprefixer';
import{ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART, ADD_WISHLIST, REMOVE_WISHLIST, EMPTY_WISHLIST} from'./Constant'

  export const addTocart =(data) =>{
    console.warn("add to cart called",data);
    return{
        type:ADD_TO_CART,
        data
    }
  }

  export const removeTocart =(data) =>{
    console.warn("remove to cart called",data);
    return{
        type:REMOVE_TO_CART,
        data
    }
  } 

  export const emptycart =() =>{
    console.warn("empty cart called");
    return{
        type:EMPTY_CART,
       
    }
  } 

  export const addwishlist=(data) =>{
    console.warn('add wishlist called',data);
    return{
      type:ADD_WISHLIST,
      data
    }
  }

  export const removewishlist = (data) =>{
    console.warn('remove to wishlist called',data);
    return{
      type:REMOVE_WISHLIST,
      data
    }
  }

  export const emptywishlist = () =>{
    console.warn('empty wishlist called');
    return{
      type:EMPTY_WISHLIST,
    }
  }