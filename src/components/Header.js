import HeaderNavList from "./HeaderNavList"
import NetworksMenu from "./NetworksMenu"

export default function Header() {
	return (
        <header className="Header">
            <div>
                <h1 className='Header__title'>
                    <a href="/">
                        Cédric Olivry
                    </a>
                </h1>
                <h2 className='Header__subtitle'>
                    Développeur d'application - JavaScript React
                </h2>
                <p className="Header__description">
                    Je développe des applications web accessibles et responsives en React.
                </p>               
                <HeaderNavList />
            </div>
            <NetworksMenu />
        </header>
    )
}