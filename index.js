const userName = document.querySelector("#user-name");
const userLink = document.querySelector("#user-link");
const userText = document.querySelector("#user-text");

function modifyUserName(str) {
  if (!str) {
    return str;
  }
  return (str[0].toUpperCase() + str.slice(1).toLowerCase()).trim();
}

const commentAvatar = document.querySelector(".comment__avatar");

function showAvatar(src) {
  let image = document.createElement("img");
  image.src = src;
  commentAvatar.append(image);
}

function checkSpam(str) {
  return str.replace(/(viagra|XXX)/gi, "***");
}

const button = document.querySelector(".button");
const commentName = document.querySelector(".comment__name");
const commentText = document.querySelector(".comment__text");
const chechboxAnonim = document.querySelector("#anonim-checkbox");
const plugName = "username";

//аватарки
const arrayAvatars = [
  "./assets/images/avatar_1.jpg",
  "./assets/images/avatar_2.jpg",
  "./assets/images/avatar_3.jpg",
  "./assets/images/avatar_4.jpg",
  "./assets/images/avatar_5.jpg",
];
const randomAvatar =
  arrayAvatars[Math.floor(Math.random() * arrayAvatars.length)];

//время
const postingTime = document.querySelector("#time");
const date = new Date();
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

//отрисовка html
const commentBox = document.querySelector(".comment");
function addNewComment() {
  const container = document.createElement("div");
  container.innerHTML =
    '<div class="comment__avatar"></div><div class="comment__name-box"><p class="comment__name"></p><span id="time"></span></div><p class="comment__text"></p>';

  commentBox.append(container);
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (chechboxAnonim.checked === true) {
    commentName.textContent = plugName;
  } else if (userName.value === "") {
    commentName.textContent = "Salem";
  } else {
    commentName.textContent = modifyUserName(userName.value);
  }

  if (userLink.value === "") {
    const image = document.createElement("img");
    image.src = randomAvatar;
    commentAvatar.append(image);
  } else {
    showAvatar(userLink.value);
  }

  if (userText.value === "") {
    commentText.value = "Я люблю котиков";
  } else {
    commentText.textContent = checkSpam(userText.value);
  }
  postingTime.textContent = date.toLocaleString("ru", options);
  addNewComment();
  document.querySelector(".user-data").reset();
});
