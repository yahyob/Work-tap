import './header.css'
import Img from '../img/Group 18 (2).png'
import Img1 from '../img/Group 18 (1).png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';



function Header() {
    return(
        <div className="container mt-5">
            <div className="row gap-1">
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page-1 d-flex">
                        <div>
                            <img class="w-100 mt-3" src={Img} alt="" />
                        </div>
                        <div>
                            <h6 class="m-3">Ангелина Сорокина</h6>
                            <h6 class="href-a m-3"><a href="#">Разработчик PHP</a>  </h6>
                            <h6 class="m-3">Выполено проектов: 65</h6>  
                            <div class="m-3"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>                 
                        </div>
                    </div>
                    <a href="#"><button type="button" class="btn btn-success mt-5">Посмотреть</button></a>
                </div>
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page-1 d-flex">
                        <div>
                            <img class="w-100 mt-3" src={Img1} alt="" />
                        </div>
                        <div>
                            <h6 class="m-3">Ангелина Сорокина</h6>
                            <h6 class="href-a m-3"><a href="#">Копирайтер</a></h6>
                            <h6 class="m-3">Выполено проектов: 104</h6> 
                            <div class="m-3"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>                                   
                        </div>
                    </div>
                    <a href="#"><button type="button" class="btn btn-success mt-5">Посмотреть</button></a>
                </div>
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page5 col-lg-4 col-md-6 col-sm-12 m-2 text-center">
                        <h5>Посмотреть всех ТОП фрилансеров</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;