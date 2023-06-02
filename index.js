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
/* 
function addNewComment(img, name, time, text) {
  const avatar = document.createElement("div");
  avatar.innerHTML = img;

  const userName = document.createElement("p");
  userName.textContent = name;

  const postingTime = document.createElement("span");
  postingTim.textContent = time;

  const commentText = document.createElement("p");
  commentText.textContent = text;

  const commentBox = document.querySelector(".comment");
  commentBox.append(avatar);
  commentBox.append(userName);
  commentBox.append(postingTime);
} */

button.addEventListener(
  "click",
  (event) => {
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
    document.querySelector(".user-data").reset();
  },
  {
    once: true,
  }
);
