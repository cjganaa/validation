export function validation(msg){
    if(msg !== ''){
        return <div style={{color:"red", fontSize:"14px"}}>{msg}</div>
    }
        return null
}