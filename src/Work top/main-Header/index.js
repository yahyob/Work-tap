import Img from '../img/Group.png'
import Img1 from '../img/Group 23.png'
import Img2 from '../img/Vector.png'



function Main() {
    return(
        <div className="container mt-5">
            <h2>Как решать задачи на WorkTap?</h2>
            <p>Идеально подходит для бизнеса и частных лиц</p>
            <div className="row justify-content-between mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={Img} alt="" />
                    <h6 class="mt-2">Выберите услугу</h6>
                    <p>В супермаркете WorkTap представлен широкий <br /> выбор услуг от квалифицированных специалистов.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img class="w-25" src={Img1} alt="" />
                    <h6 class="mt-2">Оплатите</h6>
                    <p>Деньги будут перечислены продавцу после <br /> того, как он выполнит работу, и вы её одобрите. </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img class="w-25" src={Img2} alt="" />
                    <h6>Получите результат</h6>
                    <p>Наш супермаркет гарантирует вам возврат средств <br /> в полном объёме в случае невыполнения заказа.</p>
                </div>
            </div>
        </div>
    )
}


export default Main;