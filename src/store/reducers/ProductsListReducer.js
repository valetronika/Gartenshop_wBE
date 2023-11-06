import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    productList: [],
    categoryTitle: "",
};

function generateNewProp(array) {
    return array.map((elem) => ({
        ...elem,
        isShowBySale: true,
        isShowByPrice: true,
    }));
}

const productList = createSlice({
    name: "ProductList",
    initialState,
    reducers: {
        // pages
        getAllProducts(state, action) {
            //   console.log(action);
            const full_data = generateNewProp(action.payload);
            state.productList = full_data;
            state.categoryTitle = "All products";
        },
        getSaleProducts(state, action) {
            const full_data = generateNewProp(action.payload);
            // console.log(full_data);
            const salesData = full_data.map((el) => {
                return {
                    ...el,
                    isShowBySale: el.discont_price !== null,
                };
            });

            return {
                ...state,
                productList: salesData,
                categoryTitle: "Products with sale",
            };
        },
        getProductsByCategory(state, action) {
            // console.log('action.payload',action.payload);
            const title = action.payload.category.title
            const fetchData = action.payload.data
            const newData = generateNewProp(fetchData)

            state.productList = newData;
            state.categoryTitle = title
            
            
        },
        //  filters
        priceSortReducerAscending(state) {
            state.productList.sort((a, b) => a.price - b.price);
        },

        priceSortReducerDescending(state) {
            state.productList.sort((a, b) => b.price - a.price);
        },

        alphabeticalSortReducerAscending(state) {
            state.productList.sort((a, b) => a.title.localeCompare(b.title));
        },

        alphabeticalSortReducerDescending(state) {
            state.productList.sort((a, b) => b.title.localeCompare(a.title));
        },
        discountSortReducer(state) {
            state.productList.sort((a, b) => {
                const discountPercentA = a.discont_price
                    ? ((a.price - a.discont_price) / a.price) * 100
                    : 0;

                const discountPercentB = b.discont_price
                    ? ((b.price - b.discont_price) / b.price) * 100
                    : 0;

                return discountPercentB - discountPercentA;
            });
        },
        // 1 end filters
        // checkbox sakes

        toggleSaleProducts(state, action) {
            const isActive = action.payload;

            const updatedProductList = state.productList.map((product) => {
                if (isActive) {
                    if (!product.discont_price) {
                        return {
                            ...product,
                            isShowBySale: false,
                        };
                    }
                } else {
                    if (product.isShowBySale === false) {
                        return {
                            ...product,
                            isShowBySale: true,
                        };
                    }
                }
                return product;
            });

            return {
                ...state,
                productList: updatedProductList,
            };
        },

        // фильтр по цене
        filterProductsByPrice(state, action) {
            // console.log(action);
            const { min, max } = action.payload;

            state.productList = state.productList.map((product) => {
                const productPrice = parseFloat(product.price);
                if (
                    !isNaN(productPrice) &&
                    productPrice >= min &&
                    productPrice <= max
                ) {
                    return { ...product, isShowByPrice: true };
                } else {
                    return { ...product, isShowByPrice: false };
                }
            });
        },
    },
});

export const {
    getAllProducts,
    getSaleProducts,
    getProductsByCategory,
    //
    priceSortReducerAscending,
    priceSortReducerDescending,
    alphabeticalSortReducerAscending,
    alphabeticalSortReducerDescending,
    discountSortReducer,
    //
    toggleSaleProducts,
    filterProductsByPrice,
} = productList.actions;

export default productList.reducer;
