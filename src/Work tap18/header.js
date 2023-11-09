import './header.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Img from './img/Ellipse 65.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Img1 from './img/Rectangle 43.png'
import Img2 from './img/Rectangle 43 (1).png'




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
                            <h4 class="mt-5">Работы участников</h4>
                        </div>
                        <div className="d-flex">
                            <div>
                                <img src={Img} alt="" />
                            </div>
                            <div class="m-4">
                                <h4>Никита Евреев</h4>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                            </div>
                        </div>
                        <div className="text mt-2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                        </div>
                        <div className="img mt-3">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="d-flex mt-4">
                            <div>
                                <img src={Img} alt="" />
                            </div>
                            <div class="m-4">
                                <h4>Никита Евреев</h4>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                            </div>
                        </div>
                        <div className="text mt-2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                        </div>
                        <div className="d-flex">
                            <div>
                                <img src={Img1} alt="" />
                            </div>
                            <div class="m-5">
                                <img src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div>
                                <img src={Img} alt="" />
                            </div>
                            <div class="m-4">
                                <h4>Никита Евреев</h4>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                            </div>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img class="w-100" src={Img1} alt="" />
                                </div>
                                <div className="col-lg-3">
                                    <img class="w-100" src={Img1} alt="" />
                                </div>
                                <div className="col-lg-3">
                                    <img class="w-100" src={Img1} alt="" />
                                </div>
                                <div className="col-lg-3">
                                    <img class="w-100" src={Img1} alt="" />
                                </div>
                            </div>
                        </div>
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