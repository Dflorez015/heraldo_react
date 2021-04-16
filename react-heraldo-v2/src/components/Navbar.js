import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#">Heraldo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Noticias </a></li>
                    <li class="nav-item active"><a class="nav-link" href="#">Judiciales</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Deportes
                                <span class="caret"></span></a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Fútbol</a>
                            <a class="dropdown-item" href="#">Béisbol</a>
                            <a class="dropdown-item" href="#">Baloncesto</a>
                            <a class="dropdown-item" href="#">Tenis</a>
                            <a class="dropdown-item" href="#">Otros</a>
                        </div>
                    </li>
                    <li class="nav-item active"><a class="nav-link" href="#">Clasificados</a></li>
                    <li class="nav-item active"><a class="nav-link" href="#">Política </a></li>
                    <li class="nav-item active"><a class="nav-link" href="#"> <span class="glyphicon glyphicon-log-in"></span> Ingresar </a></li>
                </ul>
            </div>
        </nav>
    );

}
export default Navbar;