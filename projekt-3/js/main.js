// Firebase
const db = firebase.firestore();

// Modal

const modal = document.querySelector(".modal");

const showModal = () => modal.classList.remove("modal__hidden");
const closeModal = () => modal.classList.add("modal__hidden");

// Form

const formLogIn = document.querySelector("#logInForm");

const getFormLogInData = (e) => {
  e.preventDefault();

  const username = formLogIn.username.value;
  console.log(username);
  const password = formLogIn.password.value;

  const credentials = {
    username,
    password,
  };

//   if (form.id === "logInForm") {
    logInUser(credentials);
//   } else if (form.id === "signUpForm") {
//     signUpUser(credentials);
//   }
};

const formSignUp = document.querySelector("#signUpForm");

const getFormSignUpData = (e) => {
  e.preventDefault();

  const username = formSignUp.usernameUp.value;
  console.log(username);
  const password = formSignUp.passwordUp.value;

  const credentials = {
    username,
    password,
  };

//   if (form.id === "logInForm") {
//     logInUser(credentials);
//   } else if (form.id === "signUpForm") {
    signUpUser(credentials);
//   }
};

formLogIn.addEventListener('submit', getFormLogInData)
formSignUp.addEventListener("submit", getFormSignUpData);


// Register Box

const boxRegisterSignup = document.querySelector("#box__register-signup");

boxRegisterSignup.addEventListener("click", (e) => {
  e.preventDefault();
  showModal();
});

// Firebase Auth

const signUpUser = (cred) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(cred.username, cred.password)
    .then(token => {
      console.log(token);
      formSignUp.reset();
      signOutUser();
      setTimeout(closeModal, 2000);
    })
    .catch((err) => {
      console.log("error");
      alert(err.message)
    });
};

const signOutUser = (cred) => {
  firebase.auth().signOut();
//   closeModal();

};

const logInUser = (cred) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(cred.username, cred.password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
      alert("error");
    });
};
