import Left from "./LeftSection.tsx";
import Center from "./CenterSection.tsx";
import Right from "./RightSection.tsx";
import CategoriesSection from "./Categories.tsx";
import Login from "./Login.tsx";

function Panel(props:{login:VoidFunction,createAccount:VoidFunction}){
    return(
        <div id="panel">
            <Left login={props.login} createAccount={props.createAccount}/>
            <Center/>
            <Right/>
        </div>
    )
}
function Content(props:{login:VoidFunction,createAccount:VoidFunction}) {
    return(
        <div id="content">
            <Panel login={props.login} createAccount={props.createAccount}/>
            <CategoriesSection/>
        </div>
    )
}

export default Content