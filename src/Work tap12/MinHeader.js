import './MinHeader.css'
import Img from './img/Ellipse 65.png'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';




function MinHdr() {
    return(
        <div class="container">
            <h3>Отзывы</h3>
            <a href="#">Положительные (65)</a>
            <span class="p-4">Отрицательные</span>
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
            <button type="button" class="btn btn-light border border-success text-success col-3 mt-3">Загрузить еще</button>
        </div>
    )
}


export default MinHdr;