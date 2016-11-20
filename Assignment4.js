/**
 * Created by chandrasekar on 21/11/16.
 */

(function personDetails(params) {

    for(var index in params){
        console.log(params[index])
    }

})({age:"25", name:"Chandru", city:"Chennai"});