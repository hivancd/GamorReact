function Left(props:{login:VoidFunction,createAccount:VoidFunction}) {
    return (
        <div id="left">
            <p id="big_font_text">start <br></br><b>streaming</b><br></br> games <br></br> diferently <br></br></p>
            <p id="small_font_text">gamor now has <b>stream party</b> platform</p>
            <div id="create_account_container">
                <a onClick={props.createAccount}>Create account</a>
            </div>
            <a onClick={props.login}>Log in</a>
        </div>
    )
}

export default Left