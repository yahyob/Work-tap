import './index.css'
import 'bootstrap/dist/css/bootstrap.css'



function Index() {
    return(
        <div class="text-center">
            <h4 class="mt-5"><a class="hrefsk" href="#">x Закрыть быстрый поиск</a></h4>
            <h2 class="mt-5">Ищите и находите подходящую работу среди <br /><a class="hrefsk1" href="#">10,000+</a> проектов и покажите на что Вы способны!</h2>
            <div class="input-group mb-3 mt-5 w-75">
                <input type="text" class="form-control" placeholder="Что нужно сделать?" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-button" id="basic-addon2"><button type="button" class="btn btn-danger">Найти</button></span>
            </div>
            <div className="maxsol d-flex">
                <a href="#"><button type="button" class="btn btn-light m-3">Тексты и переводы</button></a>
                <a href="#"><button type="button" class="btn btn-light m-3">Разработка</button></a>
                <a href="#"><button type="button" class="btn btn-light m-3">Дизайн</button></a>
                <a href="#"><button type="button" class="btn btn-light m-3">Аудио, видео монтаж </button></a>
            </div>
            <div className="maxsol1 d-flex">
                <a href="#"><button type="button" class="btn btn-light m-3">SEO и оптимизация</button></a>
                <a href="#"><button type="button" class="btn btn-light m-3">Бизнес и жизнь</button></a>
                <a href="#"><button type="button" class="btn btn-light m-3">Соцсети и реклама</button></a>
                <a href="#"><button type="button" class="hgi-bttn btn btn-light m-3">Все категории</button></a>
            </div>
        </div>
    )
}

export default Index;