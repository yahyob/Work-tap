import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Img from '../img/worktap 1.png'
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import 'bootstrap/dist/js/bootstrap.js'
import Img1 from '../img/Ellipse 59.png'




function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                    <li class="nav-item mt-2">
                        <a class="nav-link active" aria-current="page" href="#"><img src={Img} alt="" /></a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Биржа</a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Ворки</a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Конкурсы</a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Создать ворк</a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Создать заказ</a>
                    </li>
                    <li class="nav-item1 mt-3">
                        <a class="nav-link active" aria-current="page" href="#"><StarIcon/></a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#"><NotificationsIcon/></a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="icons21 nav-link active" aria-current="page" href="#"><MapsUgcIcon/></a>
                    </li>
                    <li class="nav-item mt-3">
                        <a class="nav-link active" aria-current="page" href="#">Создать ворк</a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Img1} alt="" />
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;