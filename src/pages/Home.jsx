import About from "./About";
import "../components/style.css";
export default function Home() {

    return (
        
        <div className="gradient-bg">
            <div className="Home">
                <h1>WELCOME</h1>
                
                <div className="profile">
                    <p>Hello! I'm Feifei</p>
                    <img src="/public/profile.jpg" alt="profile" />

                </div>
            </div>

        </div>
    )
}