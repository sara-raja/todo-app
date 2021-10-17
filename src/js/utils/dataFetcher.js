/* 
    dataFetcher (url)
    description:

    parameters:
        url:string
    
        asynch ---> promise


*/



const dataFetcher =async function(url=null){
    const response = await fetch (url)
    const toDoJSONData = await response.json()

    // two promises here. REsponse has the json data. and the Data function changes the json data into an array of objects for JS.
    return toDoJSONData
}

export default dataFetcher