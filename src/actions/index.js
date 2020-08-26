import {VIEW_PRODUCT} from '../contransts/ActionType'

export const viewProduct = id => (
    {
        type: VIEW_PRODUCT,
        id
    }
)