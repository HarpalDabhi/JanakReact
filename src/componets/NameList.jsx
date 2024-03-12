export default function Names(){
    const names = ["Purvi","Janak","Harpal","Vishal","Mehul"];
    
    return <div>{
        names.map((nm)=>(
        <button >{nm}  </button>
        ))
        }</div>
}