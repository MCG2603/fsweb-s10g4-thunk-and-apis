import { FAV_ADD, FAV_REMOVE, FETCH_LOADING, GET_FAVS_FROM_LS } from "../actions";

const initialState={
   
    data:null,
    loading:false,
    favItem:JSON.parse(localStorage.getItem("s10g4")),
    id:0

}
function writeFavsToLocalStorage(favs) {
    localStorage.setItem("s10g4", JSON.stringify(favs));
  }
  
  function readFavsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("s10g4"));
  }
const reducer=(state=initialState,action)=>{

    switch(action.type){
        
        case GET_FAVS_FROM_LS:
            return{...state,data:action.payload,loading:false

            }
            case FAV_ADD:
                
            state={...state,
                favItem:[...state.favItem,{favvItem:state.data,id:state.id+1}],
                id:state.id+1} ;
                localStorage.setItem("s10g4", JSON.stringify(state.favItem))
                console.log(localStorage)
               return state;
            case FAV_REMOVE:
               let arr=state.favItem;
               

            return{...state,
                favItem:arr.filter(item=>item.id!=action.payload)
            } 
            case FETCH_LOADING:
                return{...state,loading:true,data:false
    
                } 

       

      

         default:
            
            return state;
           
    }


}

export default reducer;