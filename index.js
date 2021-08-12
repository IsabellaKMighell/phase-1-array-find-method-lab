function superbowlWin(record){
    const result = record.find(record => record.result === "W")
    if( typeof result === "object"){
        return result.year
    }
    else{
        return undefined
    }
}
    
