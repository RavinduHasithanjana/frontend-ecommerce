import ecoms from "../apis/api";
import CreateDataContext from "./CreateDataContext";

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case "get_all_products":
            return { ...state, ProductsList: action.payload };
        case "get_all_products_status":
            return { ...state, ProductsListStatus: action.payload };
        case "clear_get_all_products_status":
            return { ...state, ProductsListStatus: "" };
        default:
            return state;
    }
};

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const getAllProducts = (dispatch) => async () => {
    try {
        const response = await ecoms.get("/api/products/");
        dispatch({ type: "get_all_products", payload: response.data });
        dispatch({ type: "get_all_products_status", payload: response.status });
        console.log("get all Products status: " + response.status);
        console.log("get all Products status: " + response.data);
    } catch (e) {
        console.log(e);
        dispatch({ type: "get_all_products_status", payload: 400 });
        console.log("get all Prdoucts status: " + e);
    }
};

const clearProductsListStatus = (dispatch) => () => {
    dispatch({ type: "clear_get_all_products_status" });
};

export const { Provider, Context } = CreateDataContext(
    ProductsReducer,
    { getAllProducts, clearProductsListStatus },
    {
        ProductsList: [],
        ProductsListStatus: "",
    }
);
