// Immediately Invoked Function Expressions (IIFE)

// ( Function Definetion )( Execution Call )

// Global scope creates problem many time to avoid created polution from the global scope veriable we use IIFE

(function chai(){ //---->>> Named IIFE
    console.log(`DB CONNECTED`);
})();  // ---->>> semi coloun is important for write another IIFE

(function aurcode(){ //---->>> Named IIFE
    console.log(`DB CONEECTED TWO`);
})();

( (name)=> {   //---->>> Arrow Function --->>> UnNamed / Simple IIFE
    console.log(`DB CONTTECTED THREE ${name}`);
})("Harshit")

