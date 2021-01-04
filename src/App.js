import React, { Component } from "react";
import MenuUtama from "./page/MenuUtama";
import MenuProduk from "./page/MenuProduk";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";


const Header = () => {
    return (
        <div>
            <h2>Ini Halaman Untuk Header</h2>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h2>Ini Halaman Untuk Footer</h2>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MenuUtama />
                <MenuProduk />
                <MenuKontak />
                <MenuTentangKami />
                <Footer />
            </div>
        )
    }
}

export default App;