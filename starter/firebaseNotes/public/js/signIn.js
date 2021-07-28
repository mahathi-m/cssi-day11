const signIn = () => {
    console.log("signIn function running!");
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {

        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;
        
        console.log(user);
        window.location = ("writeNote.html");
    })

    .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log("Error Occurred");
        console.log(errorCode);
        console.log(errorMessage);

    });

};
    
    
const signInButton = document.querySelector("#signInButton");

signInButton.addEventListener("click",signIn);


