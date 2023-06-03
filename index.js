function modifyUserName(str) {
  if (!str) {
    return str;
  }
  return (str[0].toUpperCase() + str.slice(1).toLowerCase()).trim();
}

const chechboxAnonim = document.querySelector("#anonim-checkbox");
const userName = document.querySelector("#user-name");
const commentName = document.querySelector(".comment__name");
const plugName = "Salem";

function showName(checkbox, inputname, username) {
  if (checkbox.checked === true || inputname.value === "") {
    username.textContent = plugName;
  } else {
    username.textContent = modifyUserName(inputname.value);
  }
}

const userLink = document.querySelector("#user-link");
const arrayAvatars = [
  "./assets/images/avatar_1.jpg",
  "./assets/images/avatar_2.jpg",
  "./assets/images/avatar_3.jpg",
  "./assets/images/avatar_4.jpg",
  "./assets/images/avatar_5.jpg",
];
const randomAvatar =
  arrayAvatars[Math.floor(Math.random() * arrayAvatars.length)];

const commentAvatar = document.querySelector(".comment__avatar");

function showAvatar(link, image) {
  if (link.value === "") {
    image.src = randomAvatar;
  } else {
    image.src = link.value;
  }
}

const postingTime = document.querySelector(".time");
const date = new Date();
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const userText = document.querySelector("#user-text");
const commentText = document.querySelector(".comment__text");

function checkSpam(str) {
  return str.replace(/(viagra|XXX)/gi, "***");
}

const button = document.querySelector(".button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  showName(chechboxAnonim, userName, commentName);
  postingTime.textContent = date.toLocaleString("ru", options);
  showAvatar(userLink, commentAvatar);
  commentText.textContent = checkSpam(userText.value);

  document.querySelector(".user-data").reset();
});
