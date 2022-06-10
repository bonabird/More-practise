export default function Main(props) {
    return (
        // A button that handles whether the user has selected dark or light mode
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts" >
                <li>Was First release on 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well ovver 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, incuding mobile apps</li>
            </ul>
        </main>
    )
}