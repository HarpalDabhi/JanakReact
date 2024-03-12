function ArrFruits(){
        const fruits = ["Apple", "Banana", "Cherry","Watermelon","Melon","Muskmelon"];
    
        return <div>
            {
                fruits.map((fruit)=>(
                    <li>{fruit}</li>
                ))
            }
        </div>
}

export default ArrFruits;