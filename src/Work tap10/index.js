import Img from './img/img.png' 
import './index.css'





function Header() {
    return(
        <div>
            <div className="text-center mt-5">
                <h2 class="mt-3">Поздравляем!</h2>
                <h6 class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et volutpat sagittis, turpis sed cum massa.</h6>
            </div>
            <div class="text-center mt-5">
                <img src={Img} alt="" />
            </div>
            <div className="container d-flex mt-5">
                <div class="hdr-btn col-10">
                    <button>Назад</button>
                </div>
                <div class="hdr-btn1 col-2">
                    <button>Дальше</button>
                </div>
            </div>
        </div>
    )
}
export default Header;