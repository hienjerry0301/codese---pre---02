var fs = require("fs");
fs.readFile("baitapvenha4.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var arr = data;
    INRA(data.length, data);
    reserveObject();
  }
});

var arr = [
  {id: 1,
   questionContent: "âsasas",
   questionAnswer: [ ["yes", "no"], ["yes", "no"], "yes", "no", "no", "no", "yes"  ]
  },
   {id: 2,
   questionContent: "hahahahahahaha",
   questionAnswer: ["yes", "yes", "no", "no", "no", "yes", "yes"]
  },
  { id: 3,
    questionContent: "hihihihihihi",
    questionAnswer: ["no", "yes", "no", "yes", "no", "no", "yes"]
  }
];

for (let i = 0; i < arr.length; i++) {
  let a = arr[i].questionAnswer;
  let b = a.length;

  let INRA = function(b, a) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] == "no") {
        count++;
      }else{
          if(Array.isArray(a[i])){
              for(let k = 0 ; k < a[i].length; k++){
                  if(a[k]=='no'){
                      count++;
                  }
              }
          }
      }
    }
    if(count < 3){
        console.log(arr[i].id);
    }
  };
}


var obj = {
    questionContent1: "âsasas",
    questionContent2: "hahahahahahaha",
    questionContent3: "hihihihihihi"
};
var reserveObject = function(input){
    var questionContent = Object.questionContent(input);
    console.log(questionContent);
    var returnValue = {};
    for( let i = 0; i < questionContent.length; i++){
        returnValue[input[questionContent[i]]]==questionContent[i];
    }
    returnValue;
};

    


