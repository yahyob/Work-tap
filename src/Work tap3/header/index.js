import './index.css'
import Img from '../img/Ellipse 71.png'
import Img1 from '../img/Rectangle 22.png'
import AttachmentIcon from '@mui/icons-material/Attachment';


function Index() {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div class="input-group mb-3 w-75">
                        <input type="text" class="form-control" placeholder="Поиск" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    </div>
                    <div className="macsikom d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                    <div className="macsikom1 d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                    <div className="macsikom1 d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                    <div className="macsikom1 d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                    <div className="macsikom1 d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                    <div className="macsikom1 d-flex mt-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-3">
                            <h5><a class="mac-a" href="#">Никита Евреев</a></h5>
                            <p>Ну че там, сделал?</p>
                        </div>
                    </div>
                </div>
                <div className="nikita col-lg-6">
                    <div className="d-flex">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="comsi m-3">
                            <h4>Никита Евреев</h4>
                            <a href="#">Онлайн</a><hr />
                        </div>
                    </div>
                    <p>Сегодня</p>
                    <div class="nikita-text"><h5>Нужно сделать супер крутой дизайн для <br /> сайта</h5></div>
                    <div class="nikita-text1 mt-4"><h5>Ну в общем так</h5></div>
                    <div className="d-flex">
                        <div class="m-3">
                            <img src={Img1} alt="" />
                            <p>Фото 1.png</p>
                        </div>
                        <div class="m-3">
                            <img src={Img1} alt="" />
                            <p>Фото фото....jpg</p>
                        </div>
                        <div class="m-3">
                            <img src={Img1} alt="" />
                            <p>Бриф.docx</p>
                        </div>
                        <div class="m-3">
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                    <div class="oknok"><p>Ок!</p></div>
                    <div className="max-wid">
                        <button class="m-4"><AttachmentIcon/></button>
                        <div className="d-flex">
                            <div class="input-group1 mb-3 w-50">
                                <input type="text" class="form-control" placeholder="Введите Ваше сообщение" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            </div>
                            <div class="buttons">
                            <button class="otpra">Отправить </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Index;