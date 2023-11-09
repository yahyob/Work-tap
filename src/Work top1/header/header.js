import './header.css'
import Img from '../img/Ellipse 54 (3).png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';



function Header() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <h3>Нужно сделать Дизайн сайта по тематике авто</h3>
                    <div class="d-flex">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-4">
                            <h5>Екатерина Иванова</h5>
                            <h5>Размещено проектов на бирже: 25</h5>
                            <div class="d-flex"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/><p>15 отзывов</p></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-end mt-5">
                    <a class="hreaf" href="#"><h5>Бюджет: 50 000 тенге</h5></a>
                    <p>4 часа 28 минут назад</p>
                    <p class="mt-5">Предложений: 50</p>
                </div>
            </div>
        </div>
    )
}


export default Header;