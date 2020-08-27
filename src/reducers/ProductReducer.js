import { CHANGE_VIEW_PAGE} from '../contransts/ActionType';

const initialState={
    products: [
        [
            {id: 1 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 2 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 3 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 4 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 5 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 6 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 7 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 8 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 10 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 11 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 12 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 13 , name: "áo đôi nam nữ", price: 100, priceSale: 200}]
        ,[
            {id: 14 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 15 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 16 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 17 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 18 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 19 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
            {id: 20 , name: "áo đôi nam nữ", price: 100, priceSale: 200}]
    ]
}
const listProductPage = {
    products: initialState.products[1],
    pages: {
        activePage: 1,
        totalPage: 100
    }
}

const listProducts = (state = listProductPage, action) => {
    switch(action.type){
        case CHANGE_VIEW_PAGE:
            var page = action.page;
            if(action.page > 2)  page = 2;
            return {
                products: initialState.products[page - 1], 
                pages: {
                    ...state.pages, activePage: action.page
                },
            };
        default:
            return state;
    }
}

export default listProducts;