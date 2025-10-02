import { useNavigate } from "react-router";

export default function NavigateExample(){

    let navigate = useNavigate();
    const handleClick = () => {
        console.log("Clicked")

        navigate('/');
    }
    return(
        <>
        <h1>Hello from Navigate Example</h1>
        <button onClick={handleClick}>Click to navigate</button>
        </>
        
    )
}