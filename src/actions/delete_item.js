const type="DELETE_ITEM"
const deleteItem=(id)=>{
    return {
        type:type,
        payload:id
        
    }


}
export default deleteItem