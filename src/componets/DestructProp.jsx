function DestructProp(prop){
    const {name,color} = prop;
    return <div>
        <strike>{name} is color of {color}</strike>
    </div>
}

export default DestructProp;