import './index.css'
import Img from '../img/credit-card 1.png'
import Img1 from '../img/money (1) 1.png'
import Img2 from '../img/clock 1.png'
import Img3 from '../img/sariq-img.png'



function Footer() {
    return(
        <div className="Footer container-fluid">
            <div className="row d-flex">
                <div className="col-lg-5 m-5">
                    <h3>Как WorkTap помогает бизнесу?</h3>
                    <div className="divsas d-flex mt-5">
                        <img class="m-3" src={Img} alt="" />
                        <a href="#"><p class="mt-4">Оплачивайте с р/с или карты компании</p></a>
                    </div>
                    <div className="divsas d-flex mt-5">
                        <img class="m-3" src={Img1} alt="" />
                        <a href="#"><p class="mt-4">Экономьте до 87% бюджета на фрилансе</p></a>
                    </div>
                    <div className="divsas d-flex mt-5">
                        <img class="m-3" src={Img2} alt="" />
                        <a href="#"><p class="mt-4">Экономьте до 75% времени на решении фриланс задач</p></a>
                    </div>
                    <h3 class="mt-5">WorkTap — быстро, просто и безопасно!</h3>
                    <a href="#"><button type="button" class="btn-sm btn-primary mt-5">Начать!</button></a>
                </div>
                <div className="col-lg-5 m-5 ">
                    <img class="Footer-img w-100" src={Img3} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Footer;