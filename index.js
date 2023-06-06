function showComment(name, imageSrc, time, text) {
  const commentbox = document.createElement("div");
  commentbox.classList.add("comment");

  const nametext = document.createElement("p");
  nametext.textContent = name;
  nametext.classList.add("comment__name");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.classList.add("comment__avatar");

  const postTime = document.createElement("span");
  postTime.textContent = time;
  postTime.classList.add("time");

  const comment = document.createElement("p");
  comment.textContent = text;
  comment.classList.add("comment__text");

  const container = document.querySelector(".comment-box");
  container.append(commentbox);
  commentbox.append(image);
  commentbox.append(nametext);
  nametext.append(postTime);
  commentbox.append(comment);
}

const chechboxAnonim = document.querySelector("#anonim-checkbox");
const userName = document.querySelector("#user-name");
const plugName = "Salem";

function showName(checkbox, name) {
  if (checkbox.checked === true || name.value === "") {
    return plugName;
  } else {
    return (
      name.value[0].toUpperCase() + name.value.slice(1).toLowerCase()
    ).trim();
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

function showAvatar(link, array) {
  if (link.value === "") {
    position = Math.floor(Math.random() * array.length);
    return array[position];
  } else {
    return link.value;
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

const commentText = document.querySelector("#user-text");
function checkSpam(str) {
  const censors = /(viagra|XXX)/gi;
  return str.replace(censors, "***");
}

const button = document.querySelector(".button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const formatedName = showName(chechboxAnonim, userName);
  const avatar = showAvatar(userLink, arrayAvatars);
  const postingTime = date.toLocaleString("ru", options);
  const formattedComment = checkSpam(commentText.value);

  showComment(formatedName, avatar, postingTime, formattedComment);

  document.querySelector(".user-data").reset();
});
