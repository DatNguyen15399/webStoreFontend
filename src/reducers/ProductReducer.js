import {VIEW_PRODUCT} from '../contransts/ActionType';

const initialState={
    products: [
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
        {id: 13 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 14 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 15 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 16 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 17 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 18 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 19 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
        {id: 20 , name: "áo đôi nam nữ", price: 100, priceSale: 200},
    ]
}

const products = (state = initialState.products, action) => {
    switch(action.type){
        case VIEW_PRODUCT:
            alert(action.id)
            return state;

        default:
            return state;

    }
}

export default products;