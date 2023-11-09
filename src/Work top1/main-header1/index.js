import './index.css'
import Img from '../img/Ellipse 54 (3).png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';



function Main() {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="nikita col-lg-4 col-md-6 col-sm-12">
                    <div class="d-flex m-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-4">
                            <h5>Никита Евреев</h5>
                            <div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                        </div>
                    </div>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                </div>
                <div className="nikita col-lg-4 col-md-6 col-sm-12">
                    <div class="d-flex m-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-4">
                            <h5>Никита Евреев</h5>
                            <div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                        </div>
                    </div>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                </div>
                <div className="nikita col-lg-4 col-md-6 col-sm-12">
                    <div class="d-flex m-3">
                        <div>
                            <img src={Img} alt="" />
                        </div>
                        <div class="m-4">
                            <h5>Никита Евреев</h5>
                            <div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                        </div>
                    </div>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                </div>
            </div>
        </div>
    )
}



export default Main;