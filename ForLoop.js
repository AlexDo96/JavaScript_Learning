var languages = [
    'JS',
    'Java',
    'Python',
    'Go'
];

// Way 1:
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i > 10; i--) {
    console.log(i);
}

for (var i = 0; i < 20; i += 2) {
    console.log(i);
}


// Way 2:
var index = 0;

for (; index < 10;) {
    console.log(index);
    index++;
}

// Way 3:
for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

// For/in Loop 
var myInfor = {
    name: 'Anh Do',
    age: 25,
    job: 'Tester'
};

for (var key in myInfor) {
    console.log(key);
}

// For/of Loop
for (var value of languages) {
    console.log(value);
}