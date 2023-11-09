import './index.css'
import Img from '../img/Frame 70.png'
import Img1 from '../img/Frame 71.png'
import Img2 from '../img/image 4.png'
import 'bootstrap/dist/css/bootstrap.css'
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Header() {
    return(
        <div className="container mt-5">
            <div className="row gap-4">
                <div className="Hedr-div col-lg-3 col-md-6">
                    <h6>Чистый доход</h6>
                    <h5>1 000 000 тенге</h5>
                    <div className="Hedr-div col-lg-3 col-md-6 mt-4">
                    <h6>Чистый доход</h6>
                    <h5>1 000 000 тенге</h5>
                </div>
                </div>
                <div className="Hedr-div col-lg-3 col-md-6">
                    <h6>Чистый доход</h6>
                    <h5>1 000 000 тенге</h5>
                    <div className="Hedr-div col-lg-3 col-md-6 mt-4">
                    <h6>Чистый доход</h6>
                    <h5>1 000 000 тенге</h5>
                </div>
                </div>
                <div className="Hedr-div1 col-lg-5 col-md-6">
                    <h6>Доступна сумма для вывода</h6>
                    <h5 class="mt-4"><a href="#">250 000 тенге</a></h5>
                    <h6 class="mt-4">Вывести средства на</h6>
                    <div class="d-flex gap-4 mt-5">
                        <div className="hedr-img">
                            <img src={Img} alt="" />    
                        </div>
                        <div className="hedr-img">
                            <img src={Img1} alt="" />    
                        </div>
                        <div className="hedr-img">
                            <img className='mt-4' src={Img2} alt="" />    
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="mt-3">История</h2>
            <div className="container mt-5">
                <div className="row gap-3">
                    <div className="hdr-1 col-lg-3">
                        <a class="m-5" href="#">Операция </a><br />
                        <button className='hdr-bttn mt-3'><AddIcon/></button><a href="#">Пополнение баланса</a><br />
                        <button className='hdr-bttn1 mt-3'><AddTaskIcon/></button><a href="#">Вывод средств</a><br />
                        <button className='hdr-bttn2 mt-3'><AddShoppingCartIcon/></button><a href="#">Покупка услуги</a>
                    </div>
                    <div className="header-hrefa col-lg-2">
                        <a href="#">Дата операции</a><br /><br /><br />
                        <a href="#">22 октября, 2021 года</a><br /><br /><br />
                        <a href="#">15 октября, 2021 года</a><br /><br /><br />
                        <a href="#">14 сентября, 2021 года</a>
                    </div>
                    <div className="header-hrefa col-lg-2">
                        <a href="#">Сумма</a><br /><br /><br />
                        <a href="#">150 000 тенге</a><br /><br /><br />
                        <a href="#">300 000 тенге</a><br /><br /><br />
                        <a href="#">200 000 тенге</a>
                    </div>
                    <div className="header-hrefa col-lg-4">
                        <a href="#">Hash операции </a><br /><br /><br />
                        <a href="#">c2d5abbb5d87eb9d0378e187ff0e9df5a97adf68</a><br /><br /><br />
                        <a href="#">826ad6e3c5757747304a0c7aff4e00f6ffacd832</a><br /><br /><br />
                        <a href="#">987829a3bdb628cb8bb69d4ad1eedce6193792ac</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;