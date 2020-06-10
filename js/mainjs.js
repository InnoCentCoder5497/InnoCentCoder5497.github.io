var app = document.getElementById('headtext');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('A Developer!')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('Data Scientist!')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('Web Developer!')
    .pauseFor(2000)
    .start();