var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];



//Problem #1
function monthsListed(months) {
  var monthListText = "Months listed are "
  for (var i = 0; i < (months.length)-1; i++){
    var monthListText = monthListText.concat(months[i], ", ")
  }
  var monthListText = monthListText.concat(months[2], ".")
  console.log(monthListText)
}
monthsListed(stringList);

//Problem #2
function lastElement(nums) {
  var last = (nums.length)-1;
  console.log(nums[last]);
}
lastElement(numList);


//Problem #3
function conCat(nums) {
  var newArray = []
  for (var i = 0; i<nums.length; i++){
    newArray.push(nums[i]);
  };
  console.log(newArray.join(""));
}
conCat(numList)


//Problem #4
function addIt(nums) {
  var lastNum = 0
  for (var i = 0; i<nums.length; i++){
    lastNum += nums[i];
  }
  console.log(lastNum);
}
addIt(numList);

//Problem #5
function boolMath(bool, nums) {
  if (bool[1] === true){
    console.log(nums[0]+nums[2]);
  } else {
    console.log(nums[1]*nums[1]);
  }
}
boolMath(boolList, numList);

//Problem #6
function matchyMatch(bool, nums) {
  for(var i = 0; i<bool.length; i++){
    if (bool[i] === true){
      console.log(nums[i]);
    }
  }
};
matchyMatch(boolList, numList);

//Problem #7
function cccomboBreaker(strings, bool, nums) {
   var oneArray = strings.concat(nums, bool);

  //
  // for (var i = 0; i<strings.length; i++) {
  //   oneArray.push(strings[i]);
  // }
  // for (var i = 0; i<nums.length; i++) {
  //   oneArray.push(nums[i]);
  // }
  // for (var i = 0; i<bool.length; i++) {
  //   oneArray.push(bool[i]);
  // }

  console.log(oneArray.reverse());
}
cccomboBreaker(stringList, boolList, numList)
