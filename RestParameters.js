// function sum(a, b, c, d, e) {
//     var total = 0;
//     for (let i of arguments) {
//         total += i;
//     }
//     console.log(`Total = ${total}`);
// }
// sum(1, 2, 3, 4, 5);
// ------------------------------------------------------------------
function fun(a,b,...c)
{
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun('Ronald','Neymar','pele','Mesii','Edan');

