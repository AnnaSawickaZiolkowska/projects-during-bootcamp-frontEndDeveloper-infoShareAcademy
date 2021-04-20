// Firebase 
const db = firebase.firestore();

// Form

const form = document.querySelector('form');

const getFormData = e => {
    e.preventDefault();

    const username = form.username.value;
    console.log(username);
    const password = form.password.value;

    const credentials = {
        username,
        password,
    };

    if(form.id === "form-box__form") {
        logInUser(credentials);
    }
};

form.addEventListener('submit', getFormData);




// Firebase Auth

const logInUser = (cred) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(cred.username, cred.password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      alert("error");
    });
};
