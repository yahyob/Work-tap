import './header.css'
import Img from './img/Ellipse 65.png'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';




function Header() {
    return(
        <div>
            <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="d-flex">
                        <div>
                            <h5>Нужно сделать Дизайн сайта <br /> по тематике авто </h5>
                            <p class="mt-4">Дизайн  Веб и мобильный дизайн  Веб-дизайн</p>
                        </div>
                        <div class="text-end">
                            <a class="text-success text-decoration-none" href="#">50 000 тенге</a>
                            <h6 class="mt-2 text-end">до 14.07.2021</h6>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt aliquet felis ullamcorper duis faucibus sapien tincidunt tristique elit. Facilisi feugiat neque, morbi quis. Justo non mauris velit amet, habitasse. Enim, euismod purus semper urna. Lorem adipiscing tristique dignissim mattis. Consectetur morbi nisl, at sodales nunc egestas dolor aliquet amet. Massa ipsum laoreet ipsum proin maecenas. Magnis pulvinar consequat donec ipsum id pulvinar nam sed. Ut tempor turpis vehicula nulla non.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 1.png </span><br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 2.jpeg  </span><br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.9296 0.528C14.7623 0.36052 14.5636 0.227677 14.3449 0.137075C14.1263 0.0464734 13.8919 -0.000107108 13.6552 1.8493e-07H5.40156C4.92417 1.8493e-07 4.46634 0.189642 4.12877 0.527208C3.7912 0.864773 3.60156 1.32261 3.60156 1.8V22.2C3.60156 22.6774 3.7912 23.1352 4.12877 23.4728C4.46634 23.8104 4.92417 24 5.40156 24H18.6016C19.079 24 19.5368 23.8104 19.8744 23.4728C20.2119 23.1352 20.4016 22.6774 20.4016 22.2V6.7452C20.4011 6.26797 20.2112 5.81044 19.8736 5.4732L14.9296 0.5268V0.528Z" fill="#656084"/></svg><span class="p-2">Документ 3.pdf </span><br />
                    <div class="d-flex gap-5">
                        <div>
                            <button type="button" class="btn btn-success text-light mt-4">Предложить услугу</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-Light  mt-4 border border-success">Предложений: 7</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="d-flex">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h4>Екатерина Иванова</h4>
                            <h4>Размещено проектов на бирже: 25</h4>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><span class="p-2">15 отзывов</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div class="mt-5">
                <div className="d-flex">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div class="m-4">
                        <h3>Никита Евреев</h3>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </div>
                </div>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo <br /> condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In <br /> egestas cursus orci dignissim in lectus nulla. </p>
            </div>
            <div class="mt-5">
                <div className="d-flex">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div class="m-4">
                        <h3>Никита Евреев</h3>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </div>
                </div>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo <br /> condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In <br /> egestas cursus orci dignissim in lectus nulla. </p>
            </div>
            <div class="mt-5">
                <div className="d-flex">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div class="m-4">
                        <h3>Никита Евреев</h3>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </div>
                </div>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo <br /> condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In <br /> egestas cursus orci dignissim in lectus nulla. </p>
            </div>
            <div class="mt-5">
                <div className="d-flex">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div class="m-4">
                        <h3>Никита Евреев</h3>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </div>
                </div>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo <br /> condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In <br /> egestas cursus orci dignissim in lectus nulla. </p>
            </div>
            <div class="mt-5">
                <div className="d-flex">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div class="m-4">
                        <h3>Никита Евреев</h3>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    </div>
                </div>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo <br /> condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In <br /> egestas cursus orci dignissim in lectus nulla. </p>
            </div>
            <button type="button" class="btn btn-light border border-success text-success col-1 m-3">Выбрать </button>
            <button type="button" class="btn btn-light border border-dark text-dark col-1 m-3">Выбрать </button>
        </div>
    </div>
    )
}

export default Header;