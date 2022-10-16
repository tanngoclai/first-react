function NavigationBar() {
    return (
        <aside className="navigation w-64 bg-gray-50">
            <h2 className="nav-title">
                Device Manager
            </h2>
            <ul className="nav-wrapper">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/logs">Logs</a></li>
                <li><a href="#">Setting</a></li>
            </ul>
        </aside>
    );
}

export default NavigationBar;