import './header.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Img from './img/Ellipse 65.png'
import Img1 from './img/Rectangle 34.png'
import Img2 from './img/Rectangle 33.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function Header() {
    return( 
        <div>
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="d-flex gap-5">
                            <div>
                                <h5>Нужно сделать рекламный баннер </h5>
                                <p class="pt-3">Дизайн Дизайн баннеров</p>
                            </div>
                            <div class="text-end ">
                                <a class="text-success text-decoration-none" href="#">100 000 тенге</a>
                                <p class="mt-2">до 14.07.2021</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <h5 class="m-1">Название компании / частное лицо:</h5><p class="m-1"> McDonalds</p>
                        </div>
                        <div className="d-flex mt-4">
                            <h5 class="m-1">Род деятельности компании: </h5><p class="m-1">  Бургеры</p>
                        </div>
                        <div className="d-flex mt-4">
                            <h6 class="m-1">Каналы распространения и география продаж: </h6><p class="m-"> Респубика Казахстан, г. Алматы</p>
                        </div>
                        <div className="d-flex mt-4">
                            <h5 class="m-1">Название компании / частное лицо:</h5><p class="m-1"> McDonalds</p>
                        </div>
                        <div className="d-flex mt-4">
                            <h5 class="m-1">Портрет целевой аудитории: </h5><p class="m-1"> от 6 до 20 лет</p>
                        </div>
                        <div className="d-flex mt-4">
                            <h5 class="m-1">Укажите ближайших конкурентов:</h5><p class="m-1">  BurgerKing, KFC, JekasDoner</p>
                        </div>
                        <div className="mt-4">
                            <h6 class="m-1">Опишите основные конкурентные преимущества компании / объекта / услуги:  </h6><p class="m-1"> Расположен в центральных улицах и больших ТЦ</p>
                        </div>
                        <div className="mt-4">
                            <h6 class="m-1">Дизайн страницы какой социальной сети необходимо разработать:</h6><p class="m-1"><li>Facebook</li> <li>Вконтакте</li> <li>Instagram</li> </p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Адрес сайта и целевой страницы:  </h5><p class="m-1"> https://www.instagram.com/mcdonalds.kaz/ <br />https://vk.com/mcdonalds_kazakhstan <br /> https://www.facebook.com/mcd.kazakhstan/</p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Цель создания страницы: (лишние пункты удалите) </h5><p class="m-1"> <li>имидж</li> <li>продажа продукта на странице</li><li>информирование</li><li>привлечение трафика на сайт</li></p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Какое должно быть название страницы?  </h5><p class="m-1">  McDonalds</p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Есть ли логотип компании?  </h5><p class="m-1">  ДА </p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Есть ли слоган компании?  </h5><p class="m-1">  Хэппи Мил - это коробка, которая порадует маленьких гостей ресторанов McDonald’s во всем мире!</p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Есть ли фирменный стиль компании?  </h5><p class="m-1">  Да</p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Какой стиль страницы является предпочтительным: </h5><p class="m-1"> <li>открытый к общению</li><li>игривый</li><li>собеседник - друг</li></p>
                        </div>
                        <div className="mt-4">
                            <h5 class="m-1">Какую информацию вы хотите размещать на странице?   </h5><p class="m-1">  Реклама продукта</p>
                        </div>
                        <div className="mt-4">
                            <h6 class="m-1">Укажите любую дополнительную информацию, которую вы считаете важной. </h6><p class="m-1">  Сделать мощный и красивый баннер</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 1.png </span><br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 2.jpeg </span><br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 3.pdf</span>
                            <p class="mt-3">Участников: 7</p>
                        </div>
                        <div class="mt-3">
                            <h3>Принять участие</h3>
                            <h6 class="mt-3">Описание</h6>
                            <div class="form-floating col-6">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Кратко опишите свой ворк</label>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <h2>Фотографии для конкурса</h2>
                            <h6 class="mt-4">Загрузите фотографии работ, которые Вы сделали для конкурса. </h6>
                            <div className="row gap-5 justify-content-between">
                                <div className="Min-Dv col-lg-4 col-md-3 col-sm-12 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"><g clip-path="url(#clip0_611_3154)"><path d="M0 35C0 54.299 15.701 70 35 70C54.299 70 70 54.299 70 35C70 15.701 54.299 0 35 0C15.701 0 0 15.701 0 35ZM17.5 35C17.5 34.0717 17.8687 33.1815 18.5251 32.5251C19.1815 31.8687 20.0717 31.5 21 31.5H31.5V21C31.5 20.0717 31.8687 19.1815 32.5251 18.5251C33.1815 17.8687 34.0717 17.5 35 17.5C35.9283 17.5 36.8185 17.8687 37.4749 18.5251C38.1312 19.1815 38.5 20.0717 38.5 21V31.5H49C49.9283 31.5 50.8185 31.8687 51.4749 32.5251C52.1312 33.1815 52.5 34.0717 52.5 35C52.5 35.9283 52.1312 36.8185 51.4749 37.4749C50.8185 38.1312 49.9283 38.5 49 38.5H38.5V49C38.5 49.9283 38.1312 50.8185 37.4749 51.4749C36.8185 52.1312 35.9283 52.5 35 52.5C34.0717 52.5 33.1815 52.1312 32.5251 51.4749C31.8687 50.8185 31.5 49.9283 31.5 49V38.5H21C20.0717 38.5 19.1815 38.1312 18.5251 37.4749C17.8687 36.8185 17.5 35.9283 17.5 35Z" fill="#FBA457"/></g><defs><clipPath id="clip0_611_3154"><rect width="70" height="70" fill="white"/></clipPath></defs></svg><br />
                                    <a class="text-decoration-none text-warning" href="">Добавить фото </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-12 w-25 mt-3">
                                    <img src={Img2} alt="" />
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-12 w-25 m-3">
                                    <img src={Img1} alt="" />               
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-success col-5 mt-4">Отправить работу</button>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <div>
                                <img src={Img} alt="" />
                            </div>
                            <div class="p-3">
                                <h5>Екатерина Иванова</h5>
                                <h5>Размещено проектов на бирже: 25</h5>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><span>15 отзывов</span>
                            </div>
                        </div>
                        <button type="button" class="btn btn-light m-3">Дизайн баннера</button>
                        <button type="button" class="btn btn-light m-3">Реклама</button>
                        <button type="button" class="btn btn-light m-3">Дизайн соц сетей</button><br />
                        <button type="button" class="btn btn-light m-3">Web дизайн </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;