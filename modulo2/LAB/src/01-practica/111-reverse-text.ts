console.log("*****111. Reverse text*****");
function reverseText(text: string): string {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseText("Uno dos tres"));
