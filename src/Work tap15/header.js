import './header.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Img from './img/img1.png'
import Img1 from './img/img2.png'
import Img2 from './img/img3.png'
import Img3 from './img/img4.png'


function Header() {
    return(
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-3">
                    <img src={Img} alt="" />
                    <h3>Опубликуйте бриф</h3>
                    <h6>Зарезервируйте бюджет <br /> конкурса, и мы уведомим <br /> всех исполнителей.</h6>
                </div>
                <div class="col-lg-3">
                    <img src={Img1} alt="" />
                    <h3>Опубликуйте бриф</h3>
                    <h6>Зарезервируйте бюджет <br /> конкурса, и мы уведомим <br /> всех исполнителей.</h6>
                </div>
                <div class="col-lg-3">
                    <img src={Img2} alt="" />
                    <h3>Опубликуйте бриф</h3>
                    <h6>Зарезервируйте бюджет <br /> конкурса, и мы уведомим <br /> всех исполнителей.</h6>
                </div>
                <div class="col-lg-3">
                    <img src={Img3} alt="" />
                    <h3>Опубликуйте бриф</h3>
                    <h6>Зарезервируйте бюджет <br /> конкурса, и мы уведомим <br /> всех исполнителей.</h6>
                </div>
            </div>
        </div>
    )
}


export default Header;