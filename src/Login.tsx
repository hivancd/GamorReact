import LoginBackground from "./login_background";

// function check() {
//     const usernameElement = document.getElementById("user_name") as HTMLInputElement;
//     usernameElement.value = usernameElement.innerHTML
//     const username = usernameElement.value;
//     // const username = usernameElement.value;
//     const pwElement = document.getElementById("pw") as HTMLInputElement;
//     const pw = pwElement.value;
//     const pwans = localStorage.getItem(username);
//     if (pwans == pw) {
//         alert("Succesfully logged in");
//     }
//     else {
//         alert("Wrong username or password");
//     }
// }

function Login(props: { main: (VoidFunction), Link: (VoidFunction) }) {

    function check() {
        const usernameElement = document.getElementById("user_name") as HTMLInputElement;
        usernameElement.value = usernameElement.innerHTML
        const username = usernameElement.value;
        const pwElement = document.getElementById("pw") as HTMLInputElement;
        const pw = pwElement.value;
        const pwans = localStorage.getItem(username);
        if (pwans == pw) {
            alert("Succesfully logged in");
        }
        else {
            alert("Wrong username or password");
        }
    }

    return (
        <>
            <LoginBackground />
            <div className="container">
                <form className="login_form">
                    <h1>Login</h1>
                    <label htmlFor="user_name">Username</label>
                    <br />
                    <input type="text" id="user_name" name="user_name"  />
                    <br />
                    <label htmlFor="pw">Password</label>
                    <br />
                    <input type="password" id="pw" name="pw" />
                    <input className="submit" type="submit" onClick={check}></input>
                    <p>Don't have an account? <a onClick={props.Link}>Click Here</a> </p>
                    <a onClick={props.main} >Main Page</a>
                </form>
            </div>
        </>
    )
}

export default Login

