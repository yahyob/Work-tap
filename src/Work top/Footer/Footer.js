
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';





function Footer() {
    return(
        <div className="Footerss container-fluid mt-5">
            <div className="row justify-content-between m-5">
                <div className="col-lg-3">
                    <h2>Топ категории</h2>
                    <p>Тексты и переводы</p>
                    <p>Разработка</p>
                    <p>Дизайн</p>
                    <p>Аудио, видео монтаж</p>
                    <p>Соцсети и реклама</p>
                    <p>Бизнес и жизнь</p>
                    <p>SEO и оптимизация</p>
                </div>
                <div className="col-lg-3">
                    <h2>О Проекте</h2>
                    <p>О Нас</p>
                    <p>Как Это Работает</p>
                    <p>Политика Приватности</p>
                    <p>Правила Пользования </p>
                    <p>Пресса о нас</p>
                </div>
                <div className="col-lg-3">
                    <h2>Поддержка</h2>
                    <p>Контакты</p>
                    <p>Политика Безопасности</p>
                    <p>FAQ</p>
                </div>
                <div className="col-lg-3">
                    <h2>Follow</h2>
                    <button class="footer-button m-2"><FacebookIcon/></button>
                    <button class="footer-button m-2"><TwitterIcon/></button>
                    <button class="footer-button m-2"><InstagramIcon/></button>
                    <button class="footer-button m-2"><ForwardToInboxIcon/></button>
                </div>
            </div>
        </div>
    )
}



export default Footer;