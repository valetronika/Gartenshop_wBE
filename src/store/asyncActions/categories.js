import { getAllCategoriesActions } from "../reducers/CategoryReducer"

export const fetchCategories =()=>{
    return function (dispatch){
        fetch('https://telran-project-backend-y5gf.onrender.com/categories/all')
            .then((res)=>res.json())
            .then(data=>dispatch(getAllCategoriesActions(data)))
    }
}

// export const fetchProductsByCategory =()=>{
//     return function (dispatch){
//         fetch('http://localhost:3333/categories/all')
//             .then((res)=>res.json())
//             .then(data=>dispatch(getAllCategoriesActions(data)))
//     }
// }