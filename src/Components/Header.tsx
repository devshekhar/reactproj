function Header() {
return (
<>
<div id="top-nav" className="navbar navbar-inverse navbar-static-top">
<div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand" href="#">
      <i className="fas fa-tachometer-alt"></i> Dashboard
    </a>
  </div>
  <div className="navbar-collapse collapse">
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <a
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          href="#"
        >
          <i className="fa fa-user-circle"></i> Admin{" "}
          <span className="caret"></span>
        </a>
        <ul id="g-account-menu" className="dropdown-menu" role="menu">
          <li>
            <a href="#">
              <i className="fa fa-user-secret"></i> My Profile
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</div>
</>
)}

export default Header;