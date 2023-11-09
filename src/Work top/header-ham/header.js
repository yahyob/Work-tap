import './header.css'
import Img from '../img/Ellipse 54.png'
import Img1 from '../img/Ellipse 54 (1).png'
import Img2 from '../img/Ellipse 54 (2).png'





function Header() {
    return(
        <div className="container mt-5">
            <div className="row gap-1">
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page-1 d-flex">
                        <img class="w-25 mt-3" src={Img} alt="" />
                        <h5 class="m-5">Сделать дизайн <br /> интернет-магазина</h5>
                    </div>
                    <p class="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                    <a href="#"><button type="button" class="btn btn-success">Посмотреть</button></a>
                </div>
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page-1 d-flex">
                        <img class="w-25 mt-3" src={Img1} alt="" />
                        <h5 class="m-5">Сделать дизайн <br /> интернет-магазина</h5>
                    </div>
                    <p class="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                    <a href="#"><button type="button" class="btn btn-success">Посмотреть</button></a>
                </div>
                <div className="page col-lg-4 col-md-6 col-sm-12 m-2">
                    <div className="page-1 d-flex">
                        <img class="w-25 mt-3" src={Img2} alt="" />
                        <h5 class="m-5">Сделать дизайн <br /> интернет-магазина</h5>
                    </div>
                    <p class="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                    <a href="#"><button type="button" class="btn btn-success">Посмотреть</button></a>
                </div>
            </div>
        </div>
    )
}


export default Header;