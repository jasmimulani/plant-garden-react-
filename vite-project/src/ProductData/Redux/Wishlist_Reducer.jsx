import { ADD_WISHLIST } from './Constant'

 const getwishlistDataFromLocalstorage = () =>{
    const wishlistData = localStorage.getItem('wishlist');
    return wishlistData ? JSON.parse(wishlistData) : [];
 };



const Wishlist_Reducer = (state = getwishlistDataFromLocalstorage(),action) => {
  switch(action.type){
    case ADD_WISHLIST:
        // console.warn('add wishlist called',action);
        const updatewishlistadd = [action.data, ...state];
        console.log("wishlistdata" , updatewishlistadd);
        localStorage.setItem('wishlist',JSON.stringify(updatewishlistadd));
        return updatewishlistadd;
        
        default: return state;

  }
 
}


export default Wishlist_Reducer
