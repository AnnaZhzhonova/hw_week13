const userName = document.querySelector("#user-name");
const userLink = document.querySelector("#user-link");
const userText = document.querySelector("#user-text");

function modifyUserName(str) {
  if (!str) {
    return str;
  } else {
    return (str[0].toUpperCase() + str.slice(1).toLowerCase()).trim();
  }
}

const commentAvatar = document.querySelector(".comment__avatar");

function showAvatar(src) {
  let image = document.createElement("img");
  image.src = src;
  commentAvatar.append(image);
}

function checkSpam(str) {
  str = str.replace(/(viagra|XXX)/gi, "***");
  return str;
}

const button = document.querySelector(".button");
const commentName = document.querySelector(".comment__name");
const commentText = document.querySelector(".comment__text");
const plugName = "Anonimus";
const plugAvatar = "./assets/images/avatar_null.jpg";

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (userName.value === "") {
    commentName.textContent = plugName;
  } else {
    commentName.textContent = modifyUserName(userName.value);
  }
  userName.value = null;

  if (userLink.value === "") {
    let image = document.createElement("img");
    image.src = plugAvatar;
    commentAvatar.append(image);
  } else {
    showAvatar(userLink.value);
  }
  userLink.value = null;

  if (userText.value === "") {
    commentText.value = "Я люблю котиков";
  } else {
    commentText.textContent = checkSpam(userText.value);
  }

  userText.value = null;
});
