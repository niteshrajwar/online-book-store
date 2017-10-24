function testJS()
{

var b = document.getElementById('name').value;
console.log(b);
document.getElementById('tab').innerHTML ="<tr>"+"<td>"+b+"</td>"+"</tr>";

}