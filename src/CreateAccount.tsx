import LoginBackground from "./login_background";

function store() {
    const usernameElement = document.getElementById("user_name") as HTMLInputElement;
    const username = usernameElement.value;
    const pwElement = document.getElementById("pw") as HTMLInputElement;
    const pw = pwElement.value;
    localStorage.setItem(username, pw);
    alert("Account created succesfully");
}

function CreateAccount(props: { main: (VoidFunction), Link: (VoidFunction) }) {
    return (
        <>
            <LoginBackground />
            <div className="container">
                <form className="login_form">
                    <h1>Create Account</h1>
                    <label htmlFor="user_name">Username</label>
                    <br />
                    <input type="text" id="user_name" />
                    <br />
                    <label htmlFor="pw">Password</label>
                    <br />
                    <input type="password" id="pw" />
                    <input className="submit" type="submit" onClick={store}></input>
                    <p>You have an account? <a onClick={props.Link}>Click Here</a> </p>
                    <a onClick={props.main}>Main Page</a>
                </form>
            </div>
        </>
    )
}

export default CreateAccount