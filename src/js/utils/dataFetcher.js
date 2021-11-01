const dataFetcher =async function(url=undefined){
    const response = await fetch (url)
    // console.log(response);
    const data = await response.json()

    // two promises here. the function response has the json data. WE have to parse the json data, so the function data uses response.json to change the json data into an array of objects for JS.

    return data
    // console.log(data);
}

export {dataFetcher}