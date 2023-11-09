import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Img from './img/Rectangle 20 (1).png'



function Index() {
    return(
    //   <h1 class="text-center mt-4">История <a class="a-href" href="#">покупок</a></h1>
    //   <div className="d-flex mt-5">
    //             <div class="h3a">
    //                 <h3>Всего 65 сделок</h3>
    //             </div>
    //             <div class="header-text m-2">
    //                 <h5>Показать только:</h5>
    //             </div>
    //             <div class="form-check m-2">
    //                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    //                 <label class="form-check-label" for="flexCheckDefault">
    //                 </label>
    //             </div>
    //             <div class="m-2">
    //                 <h5>Выполняется</h5>
    //             </div>
    //             <div class="form-check m-2">
    //                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    //                 <label class="form-check-label" for="flexCheckDefault">
    //                 </label>
    //             </div>
    //             <div className="m-2">
    //                 <h5>Завершено</h5>
    //             </div>
    //             <div class="dropns btn-group">
    //                 <button type="button" class="btn btn-Light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //                 По возрастанию цены
    //                 </button>
    //                 <ul class="dropdown-menu">
    //                     <li><a class="dropdown-item" href="#">Action</a></li>
    //                     <li><a class="dropdown-item" href="#">Another action</a></li>
    //                     <li><a class="dropdown-item" href="#">Something else here</a></li>
    //                     <li><hr class="dropdown-divider"/></li>
    //                     <li><a class="dropdown-item" href="#">Separated link</a></li>
    //                 </ul>
    //             </div>
    //   </div>
        <div className="container">
            <div className="row justify-content-between mt-5">
                <div className="hedr-div col-lg-3 col-md-6 col-sm-12">
                    <img src={Img} alt="" />
                    <h5 class="m-3">Дизайн сайта </h5>
                    <h5 class="hedr-5 m-3">Стандарт пакет</h5>
                    <div className="d-flex">
                        <h5 class="m-3">50 000 тенге</h5>
                        <h5 class="hedr-5 m-3">26.03.2021</h5>
                    </div>
                    <h5 class="hedr-3 m-3">Выполняется</h5>
                    <div className="d-flex">
                        <button class="hedr-btn m-3">В чат</button>
                        <button class="hedr-btnn m-3">Подробнее </button>
                    </div>
                </div>
                <div className="hedr-div col-lg-3 col-md-6 col-sm-12">
                    <img src={Img} alt="" />
                    <h5 class="m-3">Дизайн сайта </h5>
                    <h5 class="hedr-5 m-3">Стандарт пакет</h5>
                    <div className="d-flex">
                        <h5 class="m-3">50 000 тенге</h5>
                        <h5 class="hedr-5 m-3">26.03.2021</h5>
                    </div>
                    <h5 class="hedr-3 m-3">Выполняется</h5>
                    <div className="d-flex">
                        <button class="hedr-btn m-3">В чат</button>
                        <button class="hedr-btnn m-3">Подробнее </button>
                    </div>
                </div>
                <div className="hedr-div col-lg-3 col-md-6 col-sm-12">
                    <img src={Img} alt="" />
                    <h5 class="m-3">Дизайн сайта </h5>
                    <h5 class="hedr-5 m-3">Стандарт пакет</h5>
                    <div className="d-flex">
                        <h5 class="m-3">50 000 тенге</h5>
                        <h5 class="hedr-5 m-3">26.03.2021</h5>
                    </div>
                    <h5 class="hedr-3 m-3">Выполняется</h5>
                    <div className="d-flex">
                        <button class="hedr-btn m-3">В чат</button>
                        <button class="hedr-btnn m-3">Подробнее </button>
                    </div>
                </div>
                <div className="hedr-div col-lg-3 col-md-6 col-sm-12">
                    <img src={Img} alt="" />
                    <h5 class="m-3">Дизайн сайта </h5>
                    <h5 class="hedr-5 m-3">Стандарт пакет</h5>
                    <div className="d-flex">
                        <h5 class="m-3">50 000 тенге</h5>
                        <h5 class="hedr-5 m-3">26.03.2021</h5>
                    </div>
                    <h5 class="hedr-3 m-3">Выполняется</h5>
                    <div className="d-flex">
                        <button class="hedr-btn m-3">В чат</button>
                        <button class="hedr-btnn m-3">Подробнее </button>
                    </div>
                </div>
            </div>
        </div>
        // <button class="bttn mt-5">Загрузить еще</button>
    )
}


export default Index;