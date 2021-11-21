import { Component } from "react"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";



export default class Home extends Component {
    render() {
        return(
            <div>
                <div class="container"><Header/> </div>
                <Slide/>
                <br></br>
                <br></br>
                <Footer/>
            </div>
        );
        
    }
        
    
}
