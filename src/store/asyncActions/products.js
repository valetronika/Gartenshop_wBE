import { getSaleProducts, getAllProducts,getProductsByCategory } from "../reducers/ProductsListReducer";

export const fetchProducts = () => {
    return function (dispatch) {
        fetch("https://telran-project-backend-y5gf.onrender.com/products/all")
            .then((res) => res.json())
            .then((data) => dispatch(getAllProducts(data)))
            .catch((error) => {

                console.error("Product retrieval error:", error);
            });
    };
};
export const fetchSalesProducts = () => {
    return function (dispatch) {
        fetch("https://telran-project-backend-y5gf.onrender.com/products/all")
            .then((res) => res.json())
            .then((data) => dispatch(getSaleProducts(data)))
            .catch((error) => {

                console.error("Product retrieval error:", error);
            });
    };
};

// export const fetchProductsByCategory =()=>{
//     return function (dispatch) {
//         fetch("http://localhost:3333/products/all")
//             .then((res) => res.json())
//             .then((data) => dispatch(getProductsByCategory(data)))
//             .catch((error) => {

//                 console.error("Product retrieval error:", error);
//             });
//     };
// }
export const fetchProductsByCategory = (id) => {
    return function (dispatch) {
        fetch("http://localhost:3333/categories/"+id)
            .then((res) => res.json())

            .then((data) => dispatch(getProductsByCategory(data)))
            // .then((data) => console.log(data))
            .catch((error) => {

                console.error("Product retrieval error:", error);
            });
    };
};