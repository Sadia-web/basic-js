var friendsAge =[15,17,14,16];
console.log(friendsAge);

//finding array element

var friendsAge = [15,17,14,16];
var mim = friendsAge[2]
console.log(mim);

//OR

var friendsAge = [15,17,14,16];
console.log(friendsAge[3]);

//updating array element

var friendsAge = [15,17,14,16];
friendsAge[2] =35;
console.log(friendsAge);

//finding position

var friendsAge = [15,17,14,16];
var position =friendsAge.indexOf(17);
console.log(position);

// advanced array (push)
var friendsAge = [15,17,14,16];
friendsAge.push(15);
console.log(friendsAge);

//length

var friendsAge = [15,17,14,16];
console.log(friendsAge.length);

// pop

var friendsAge = [15,17,14,16];
friendsAge.pop();
console.log(friendsAge);

// remove & add at the beginning (shift)
var teaLine = ['kalam' , 'Salam' , 'Balam'];
teaLine.shift();
console.log(teaLine);

// unshift
var teaLine = ['kalam' , 'Salam' , 'Balam'];
teaLine.unshift('Palam');
console.log(teaLine);

// slice

var teaLine = ['kalam' , 'Salam' , 'Balam' , 'mim' , 'akib'];
var part = teaLine.slice(2); //mane holo 2 theke slice ba vag soro hoice
console.log(part);

//
var teaLine = ['kalam' , 'Salam' , 'Balam' , 'mim' , 'akib'];
var part = teaLine.slice(2,4); //mane holo 2 theke slice ba vag soro hoice
console.log(part);

//

var teaLine = ['kalam' , 'Salam' , 'Balam' , 'mim' , 'akib'];
var part = teaLine.slice(2,4); //mane holo 2 theke slice ba vag soro hoice
console.log(part);
console.log(teaLine);

//splice

var teaLine = ['mim', 'akib', 'sakib', 'saber', 'hanif'];
var part = teaLine.splice(2,4);
console.log(part);
console.log(teaLine);
