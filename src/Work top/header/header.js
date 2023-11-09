import './header.css'
import Img from '../img/Group 11.png'



function Header() {
    return(
        <div className="container mt-5">
            <div className="row gap justify-content-between">
                <div className="header-text col-lg-6 col-md-12">
                    <h2>Покупайте фриланс-услуги <br /> в <a href="#">два клика</a></h2>
                    <h3 class="mt-4">Ворк — единица работы продавца, которую можно купить как товар в магазине </h3>
                    <div class="input-group mb-3 mt-5">
                        <input type="text" class="form-control" placeholder="Что нужно сделать?" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-button" id="basic-addon2"><button type="button" class="btn btn-danger">Найти</button></span>
                    </div>
                    <h3 class="mt-5">Выберите рубрику, чтобы начать</h3>
                    <div className="maxsol d-flex">
                        <a href="#"><button type="button" class="btn btn-light m-3">Тексты и переводы </button></a>
                        <a href="#"><button type="button" class="btn btn-light m-3">Разработка</button></a>
                        <a href="#"><button type="button" class="btn btn-light m-3">Дизайн</button></a>
                    </div>
                    <div className="d-flex">
                        <a href="#"><button type="button" class="btn btn-light m-3">Аудио, видео монтаж  </button></a>
                        <a href="#"><button type="button" class="btn btn-light m-3">SEO и оптимизация </button></a>
                    </div>
                    <div className="maxsol1 d-flex">
                        <a href="#"><button type="button" class="btn btn-light m-3">Бизнес и жизнь </button></a>
                        <a href="#"><button type="button" class="btn btn-light m-3">Соцсети и реклама</button></a>
                        <a href="#"><button type="button" class="hgi-bttn btn btn-light m-3">Все категории</button></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img class="w-100" src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Header;