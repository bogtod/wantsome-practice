// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (cel putin 3);

// exchangeApi = https://api.exchangeratesapi.io/latest?base=EUR

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        
        req.onload = function() {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          }
          else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };
      
        // Handle network errors
        req.onerror = function() {
          reject(Error("Network Error"));
        };
      
        // Make the request
        req.send();
    });
};

get('https://api.exchangeratesapi.io/latest?base=EUR').then((response) => {
    return JSON.parse(response);
}).then((response) => console.log(response));


