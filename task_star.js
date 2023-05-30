function deleteTags(str) {
  let result = str;
  result = result.replace(/<(.)*?>/g, "");
  return result;
}
const container = document.querySelector(".container").innerHTML;
console.log(deleteTags(container));
