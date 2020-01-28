let name = "Roniya Rojan";
let age = 22;
let birthday = "July 24";
let detroitGC = true;

if (true) {
  console.log(
    `My name is ${name} and I am a student at Grand circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else if (true) {
  console.log(
    `My name is ${name} and I am a student at Grand circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

let lifeEvents = [
  "I was born in Manglore, India",
  "I went to Wayne State University",
  "I went to India for 3 months on Summer 2015 and I never wanted to leave",
  "I graduated last year with B.S in Public Health"
];
for (let lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10 + 1);

while (true) {
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
    break;
  } else {
    console.log(
      "5 === 5. It took 4 iterations to randomly generate the number 5"
    );
    break;
  }
}
