let line1 = "we are moving onto tagged templates, tagged templates are really popular but incredibly under served";
let line2 = "there is less documentation available for this, initially we aren't sure why should we use it ";
let line3 = "once we got it down, it actually it is quite powerful, the use-cases are very limited";

let lines = [line1, line2, line3];

//Tagged templates
function buildHTML(param){
    console.log("it works", param);
}

const result = buildHTML(3);
// console.log(result);

const result2 = buildHTML`what's going on here`;
// console.log(result2);

function build_HTML(strings, expressions) {
    console.log(strings);
    console.log(expressions);
}


// const result3 = build_HTML`<li>${lines}</li>`;
// const result4 = build_HTML `<li>${lines[0]}</li>`;

// function build_HTML_new(strings, expression1, expression2) {
//     console.log(strings);
//     console.log(expression1);
//     console.log(expression2);
// }
// const result5 = build_HTML_new `<li>${lines[0]}${lines[1]}</li>`;

function build_HTML_map(tags, lines) {
    console.log(tags);
    console.log(lines);
    const newHtml = lines.map(function(line){
        return `${tags[0]}${line}${tags[1]}`
    });
    return newHtml;
}
const result6 = build_HTML_map`<li>${lines}</li>`;
console.log(result6);
// document.querySelector('#quotes').innerHTML = result6;

// const output = buildHTML2`<li>${lines}</li>`;
// output('#quotes');
// function buildHTML2(tags, lines) {
//     return function(element) {
//         const newHTML = lines.map(function(line){
//             return `${tags[0]}${line}${tags[1]}`
//         });
//         const finalHTML = newHTML.join('');
//         document.querySelector(element).innerHTML += finalHTML;
//     }
// }



function testFunction(){
    return "hello, from Refinitiv";
}
const templateLiteralCallback1 = `Rob, ${() => testFunction()}`;
console.log(templateLiteralCallback1);

const templateLiteralCallback2 = `Rob, ${testFunction()}`;
console.log(templateLiteralCallback2);

function taggedcallback(strings, func) {
    return strings[0] + func();
}
const taggedLiteralcallback = taggedcallback`Rob, ${() => testFunction()}`;
console.log(taggedLiteralcallback);
