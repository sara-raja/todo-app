import { routes } from "./routes/router";
import Router from "./routes/router";


const app = document.querySelector("#app");

// Data Fetcher
const onAppInit = function(e){
    // fetch the data for the employee directory
    //  pull data -- store data ---- display data
  // const employees =  await dataFetcher('./data/employees.json')
    // keyGenerator is for data that has no unique key
    // creating new data employee key
    // imorting multiple data sets create new data in your app
    
    // todo app data your adding the key id
    // keyGenertor
  
    // build the data store for the app
  // createStore(keyGenerator(employees))
  Router(window.location.pathname)
  


}

window.addEventListener('load', onAppInit)