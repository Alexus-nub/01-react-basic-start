import logo from '/logo-name.svg'
const now = new Date()
export default function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <h3>Result-unuversity</h3>
            <span>time is :{now.toLocaleTimeString()} </span>
        </header>
    )
}
