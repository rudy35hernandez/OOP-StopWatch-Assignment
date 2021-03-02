/* OBJECTS */

// object literal syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// };

// circle.draw();

// You dont want to use object literals because if you make copies and if there are errors, you have to fix them all!

// Factory Function (using return in the object is a giveaway that it is a factory function)

function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }

}

//Now we can create a new circle by using the factory function

// const cirle = createCircle(1);


//Constructor function(Using the this for properties and new is the giveaway)

// function Circle(radius){
//     this.radius = radius;
//     this.defaultLocation = {
//         x: 0,
//         y: 0
//     };
//     this.computeOptimumLocation = function(factor){

//     }
//     this.draw = function(){
//         this.computeOptimumLocation();
//         console.log('draw')
//     }
// }

// const another = new Circle(1); 

// another.location = { x: 1 };


//Value Types vs Reference Types/////////////////////////////////////////

//Value Types = Number, string, boolean, symbol, undefined, null
//Reference types = object, function, array

let x = {value: 10};
let y = x;

x.value = 20;



//PRIMITIVES are copied by their VALUE, OBJECTS are copied by their REFERENCE

let obj = {value: 10}

function increase(obj) {
   obj.value++
}

// increase(obj);
// console.log(obj)



/////This is how you loop through an object. This returns all of the keys and values that are not functions.
///when you console key, it will only return the keys. But, adding a comma and circle[key] returns the values

// for(let key in circle){
//     if(typeof circle[key] !== 'function')
//         console.log(key, circle[key])
// }

///Below is how you get EVERY key and value in ARRAY FORM!

/* 
let keys = Object.keys(another) ///another is one of the objects we made with the constructor above
console.log(keys)
*/


////what if i want to find out if a specific property or method exists in an object?

/* 
if('radius' in another)
    console.log("radius exists in the object 'another'")
*/

////What if we need to hide certain properties or functions from the interface????????
////Instead of using this.(property name), we have to use let or const! Because it will be a local
///variable and inaccessible outside of the object!



    // function Circle(radius){
    //     this.radius = radius;     ////////<<<<<<<<< This property can still be accessed at the functions below! It has closure
    //     let = defaultLocation = { /////////<<<<< This propert can also be accessed in the functions below, but not
    //         x: 0,                  ///////////// outside the object function/constructor 
    //         y: 0
    //     };

    //     this.getDefaultLocation = function(){    ////// This is how we can call on default location from outside.
    //         return defaultLocation;                  // we have to create a new function to return defaultLocation.
    //     };                                       //// This is not the best way. Below this.draw is the best way.

    //     this.draw = function(){
    //         console.log('draw');
    //     };
        
    //     Object.defineProperty(this, 'defaultLocation', { //<<< getter is a function that is used to read a property
    //         get: function() {                               //read only property
    //             return defaultLocation;
    //         },
    //         set: function(value) {
    //             if (!value.x || !value.y)
    //             throw new Error('Invlid location.')
    //             defaultLocation = value;
    //         }                            
    //     });
    // }

    // const circle = new Circle(10)

    // circle.defaultLocation = 1;
    // circle.draw()

///for the Object.defineProperty
 //1st para, the object you want to add a new property to.
 //2nd para name of our property. 
 //3rd para is an object. We use keyword 'get:', and the value can be a function or just a reg value

 

 /* make a new stopwatch */

 function StopWatch(){
     let startClock;
     let stopClock;
     let running;
     let duration = 0
     this.start = function(){
         if(running){
             throw new Error('Stopwatch is already running')
         }
         running = true;

         startClock = new Date();
     };
     this.stop = function(){
         if(!running){
             throw new Error('Stopwatch has not started')
         }
         running = false;
         stopClock = new Date();

         const seconds = (stopClock.getTime() - startClock.getTime()) / 1000;
         duration += seconds;


     }
     this.reset = function(){
         startClock = null;
         stopClock = null;
         running = false;
         duration = 0;

     }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration
        }
    
    })
 }

 const myWatch = new StopWatch();



 

