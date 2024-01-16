const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userId = e.target.id.value;
  let userPw1 = e.target.pw1.value;
  let userPw2 = e.target.pw2.value;
  let userName = e.target.name.value;
  let userPhone = e.target.phone.value;
  let userPosition = e.target.position.value;
  let userGender = e.target.gender.value;
  let userEmail = e.target.email.value;
  let userIntro = e.target.intro.value;

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  document.body.innerHTML = "";

  const titleEl = document.createElement("h2");
  titleEl.textContent = `${userId}님 환영합니다.`;
  document.body.appendChild(titleEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = "회원 가입 시 입력하신 내역은 다음과 같습니다.";
  document.body.appendChild(descriptionEl);

  const userIdEl = document.createElement("li");
  userIdEl.textContent = `아이디: ${userId}`;
  document.body.appendChild(userIdEl);

  const userNameEl = document.createElement("li");
  userNameEl.textContent = `이름: ${userName}`;
  document.body.appendChild(userNameEl);

  const userPhoneEl = document.createElement("li");
  userPhoneEl.textContent = `전화번호: ${userPhone}`;
  document.body.appendChild(userPhoneEl);

  const userPositionEl = document.createElement("li");
  userPositionEl.textContent = `원하는 직무: ${userPosition}`;
  document.body.appendChild(userPositionEl);
});
