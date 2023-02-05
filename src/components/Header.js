import Button from "./Button";

const Header = ({ title }) => {
    const onClick = () => {
        console.log('It is working!')
    }

    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// CSS in JS
// const headingStyling = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;