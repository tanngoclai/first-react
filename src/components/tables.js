function Table(props) {
    return (
        <div className="navigation">
            <div className="nav-title">
                Device Manager
            </div>
            <div className="nav-wrapper">
                <a href="/dashboard">Dashboard</a>
                <a href="/logs">Logs</a>
                <a href="#">Setting</a>
            </div>
        </div>
    );
}

export default Table;