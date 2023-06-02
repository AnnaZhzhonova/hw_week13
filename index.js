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

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (userName.value === "") {
    commentName.textContent = plugName;
  } else {
    commentName.textContent = modifyUserName(userName.value);
  }

  if (userLink.value === "") {
    let image = document.createElement("img");
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
  document.querySelector(".user-data").reset();
});
