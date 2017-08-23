var james = {
    job: "programmer",
    married: false,
    speak:function() {
        if(mood === 'great') {
            console.log("Hello, I'm feeling great");
        } else {
            console.log("Hello, I'm feeling just okay");
        }
    },
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);
    }
    
};

james.sayJob();

james.speak("great");
james.speak("just okay");

function Person(job, married) {
    this.job = job;
    this.married = married;
}

var gabby = new Person("student",true);

function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = speak;
    
    
}

var aProperty = "job";
console.log(james[aProperty]);




var user = new Person("Codecademy Student",false);
var speak = function() {
    console.log("Hello!");
};
user.speak();

var me = new Person("Technical Writer", married);
var speak = function() {
    console.log("Wazzup");
};
user.speak(me);


var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"


var myObj = {
    name: "bob"
    
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty ("shorts") === true) {
    console.log(true);
    } else {
    console.log(false);
    }
    
suitcase.shorts = "red";

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
    console.log(property);
}

for(var x in nyc) {
    console.log(nyc[x]);
}

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
}

var printPersonName = function (p) {
    console.log(p.name);
  };
  
  var bob = new Person("Bob Smith", 30);
  printPersonName(bob);
  
  var me = new Person("Mark Garnick", 32);
  printPersonName(me);
  
  // Let's make bob again, using our constructor
  var bob = new Person2("Bob Smith", 30);
  var susan = new Person2("Susan Jordan", 35);
  
  function Circle(radius) {
      this.radius = radius;
  }

  function Dog (breed) {
    this.breed = breed;
  }
  
  // here we make buddy and teach him how to bark
  var buddy = new Dog("Golden Retriever");
  buddy.bark = function() {
  Dog.prototype.bark = function() {
    console.log("Woof");
};
    
  buddy.bark();
  
  // here we make snoopy
  var snoopy = new Dog("Beagle");
  // we need you to teach snoopy how to bark here
  snoopy.bark = function() {
      console.log("Woof");
  };
  // this causes an error, because snoopy doesn't know how to bark!
  snoopy.bark();
  }

  function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
Cat.prototype.meow = function() {
    console.log("Meow!");
};
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
cheshire.meow;


function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}


Animal.prototype.sayName = function() {
        console.log("Hi my name is " +  this.name);
};





// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

penguin.prototype = new Animal();

var penguin2 = new Penguin("Phineas");

penguin.sayName();

function Person3(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    var bankBalance = 75000;

    this.getBalance = function() {
        
        return bankBalance;
        
     };

     var returnBalance = function() {
        return bankBalance;
     };
         
      this.askTeller = function() {
         return returnBalance;
      };
       
    john.returnBalance;
 }
 
 var john = new Person3('John','Smith',30);
 var myFirst = john.firstName;
 var myLast = john.lastName;
 var myAge = john.age;

 console.log(john.bankBalance);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = john.myBalanceMethod();
console.log(myBalance);
 john.getBalance();
 
 var myBalance = 7500;
     console.log(myBalance);


    
     var languages = {
        english: "Hello!",
        french: "Bonjour!",
        notALanguage: 4,
        spanish: "Hola!"
    };
    
    // print hello in the 3 different languages
    for (var x in languages) {
        if ( typeof languages[x]=== "string") {
            console.log(languages[x]);
        }
    }

    var prototypeType = typeof Object.prototype;
    console.log(prototypeType);
    
    // now let's examine it!
    var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
    console.log(hasOwn);

    function StudentReport() {
        var grade1 = 4;
        var grade2 = 2;
        var grade3 = 1;
        this.getGPA = function() {
            return (grade1 + grade2 + grade3) / 3;
        };
    }
    
    var myStudentReport = new StudentReport();
    
    for(var x in myStudentReport) {
        if(typeof myStudentReport[x] !== "function") {
            console.log("Your overall GPA is " + myStudentReport.getGPA());
        }
    }

    var cashRegister = {
        total:0,
        lastTransactionAmount: 0,
        add: function(itemCost){
            this.total += itemCost;
            this.lastTransactionAmount = itemCost;
        },
        scan: function (item, quantity) {
            switch (item) { 
            case "eggs": 
                this.add(0.98 * quantity); 
                break;
            
            case "milk": 
                this.add(1.23 * quantity); 
                break;
            
            case "magazine":
                this.add(4.99 * quantity);
                break;
                
            case "chocolate":
                this.add(0.45 * quantity);
                break;
            }
            return true;
        },
        voidLastTransaction: function() {
            this.total -= this.lastTransactionAmount;
            this.lastTransactionAmount = 0;
        },
        applyStaffDiscount : function(employee) {
            this.total -= this.total * (employee.discountPercent/ 100);
        },
    };
    
    
    cashRegister.add(0.98);
    cashRegister.add(1.23);
    cashRegister.add(4.99);
    cashRegister.add(0.45);

    cashRegister.scan('eggs',1);
    cashRegister.scan('milk',1);
    cashRegister.scan('magazine',1);
    cashRegister.scan('chocolate',4);
    
    
    //Void the last transaction and then add 3 instead
    cashRegister.voidLastTransaction();
    cashRegister.scan('chocolate',3);
    cashRegister.applyStaffDiscount(me);
    
    
    //Show the total bill
    console.log('Your bill is '+cashRegister.total.toFixed(2));


    function StaffMember(name, discountPercent) {
        this.name = name;
        this.discountPercent = discountPercent;
    }
        
    
    
    var sally = new StaffMember("Sally",5);
    var bob = new StaffMember("Bob",10);
    
    //Create a StaffMember for yourself called me
    var me = new StaffMember("Mark",20);
