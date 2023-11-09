import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'





function Index() {
    return(
        <div className="samm d-flex">
            <div class="smm-btn1">
            <button>1</button>
            <h6>Основные</h6>
            </div>
            <div class="smm-btn">
               <button>2</button> 
               <h6>Стоимость</h6>
            </div>
            <div class="smm-btn">
                <button>3</button>
                <h6>Описание</h6>
            </div>
            <div class="smm-btn">
                <button>4</button>
                <h6>Требования</h6>
            </div>
            <div class="smm-btn">
                <button>5</button>
                <h6>Галерея</h6>
            </div>
            <div class="smm-btn">
                <button>6</button>
                <h6>Публикация</h6>
            </div>
        </div>
    )
}


export default Index;