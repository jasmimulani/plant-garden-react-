import{ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART} from'./Constant'

 const  getCartDatafromlocalstorage =()=>{
    const cartData = localStorage.getItem("cart")
    return cartData ? JSON.parse(cartData) :[];
 }
 const reducer = (state = getCartDatafromlocalstorage(),action) =>{
    switch (action.type){
        case ADD_TO_CART:
        console.warn('add to creatreducer called',action);

         // const Updatecartadd = [action.data , ...state]
         // localStorage.setItem("cart" , JSON.stringify(Updatecartadd))
         // return Updatecartadd

   const existingproduct = state.findIndex(item => item.id ===action.data.id)
   let updatecartData;

   console.log(updatecartData);

    if(existingproduct >= 0){
      updatecartData = state.map((item) => item.id === action.data.id?{...item , quntity:item.quntity +=1}:item)
      localStorage.setItem('cart',JSON.stringify(updatecartData))
    }
    else{
      updatecartData = [{...action.data,quntity:1},...state]
      localStorage.setItem('cart',JSON.stringify(updatecartData))
    }
    return updatecartData
         case REMOVE_TO_CART:
            console.warn('remove creatreducer called',action);
    
             const UpdatecartRemove = state.filter(item.id !== action.data)
             localStorage.setItem("cart" , JSON.stringify(UpdatecartRemove))
             return UpdatecartRemove

             case EMPTY_CART:
                console.warn("empty cart called",action);
                localStorage.removeItem("cart")

                return[]

                default: return state

               

                
    }
 }

 export default reducer