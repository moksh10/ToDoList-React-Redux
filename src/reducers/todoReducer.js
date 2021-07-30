let initialTasks={list:[]};
function todoReducer(tasks=initialTasks,action)
{
    
    let id=new Date().getTime().toString()
    let data=action.payload
    let completed=false
    switch(action.type)
    {
        case "ADD_ITEM":
            return {...tasks,list:[...tasks.list,{id,data,completed}]}
        case "DELETE_ITEM":
            let list=tasks.list.filter((value)=>{
               return value.id!==data
            })
            return {...tasks,list:[...list]}
        case "CHECK_ITEM":
            let lists=tasks.list.map((value)=>{
                return value.id!==data?value:{...value,completed:!value.completed}
             })
             return {...tasks,list:[...lists]}       
        case "REMOVE_ALL":
            return {list:[]}
        default:
            return tasks            

    }
}
export default todoReducer