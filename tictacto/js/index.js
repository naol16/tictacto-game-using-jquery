let count = 0;
let array1 = [];
let array2 = [];
let array4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
var notwinner = true;

//in  this code i used the id each button inorder to add the numbers into the array and to check if it is contained in the larger array
$("button").on("click", function (event) {
  if (count % 2 === 0) {
    let num1 = event.target.id;
    $("#" + num1).text(" O");
    $("#" + num1).attr("disabled", true);
    array1.push(parseInt(num1));
    let var1 = "the o one is winner";

    for (let i of array4) {
      if (i.every((value) => array1.includes(value))) {
        alert(var1);
        notwinner = false;
        location.reload();
      }
    }
  } else {
    let num2 = event.target.id;
    $("#" + num2).text("x");
    $("#" + num2).attr("disabled", true);
    array2.push(parseInt(num2));
    array2.sort((a, b) => a - b);
    let var2 = "the x one is the winner";
    // winner(array2, var2);
    for (let i of array4) {
      if (i.every((value) => array2.includes(value))) {
        alert(var2);
         notwinner = false;
        location.reload();
      }
    }
  }

  count++;
  if (notwinner) {
    if (count === 9) {
      alert("It's a draw");
      location.reload();
    }
  }
});
