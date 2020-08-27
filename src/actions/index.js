import {VIEW_PRODUCT,  CHANGE_VIEW_PAGE} from '../contransts/ActionType'

export const viewProduct = id => ({
    type: VIEW_PRODUCT,
    id
})
export const changeViewPage = page =>({
    type: CHANGE_VIEW_PAGE,
    page
})