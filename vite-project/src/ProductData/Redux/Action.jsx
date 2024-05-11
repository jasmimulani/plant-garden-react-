import{ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART} from'./Constant'

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