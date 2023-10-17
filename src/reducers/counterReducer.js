const initialState=10;
const handleCounter=(state=initialState,action)=>{
switch(action.type)
{
    case "INC": return state+1;
    case "DEC": return state-1;
    case "RESET": return state;
    default : return state

}
}
export default handleCounter