import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import Img from '../img/worktap 1.png'

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                    <li class="nav-item m-1">
                        <a class="nav-link active" aria-current="page" href="#"><img src={Img} alt="" /></a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link active" aria-current="page" href="#">Биржа</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link active" aria-current="page" href="#">Ворки</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link active" aria-current="page" href="#">Конкурсы</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link active" aria-current="page" href="#">Создать ворк</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link active" aria-current="page" href="#">Создать заказ</a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="nav-link active" aria-current="page" href="#"><button type="button" class="btn btn-Light">Регистрация</button></a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="nav-link active" aria-current="page" href="#"><button type="button" class="btn btn-success">Войти</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;