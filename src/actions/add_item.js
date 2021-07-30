const type="ADD_ITEM"
// eslint-disable-next-line no-undef
function addItem(text){
    return {
        type:type,
        payload:text
    }


}
export default addItem