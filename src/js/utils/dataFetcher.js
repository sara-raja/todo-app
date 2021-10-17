/* 
    dataFetcher (url)
    description:

    parameters:
        url:
            the url parameter is a string
    
    asynch ---> promise
        when a function is marked as async it is returning a promise


*/



const dataFetcher =async function(url=null){
    const response = await fetch (url)
    const data = await response.json()

    // two promises here. the function response has the json data. WE have to parse the json data, so the function data uses response.json to change the json data into an array of objects for JS.

    return data
}

export default dataFetcher