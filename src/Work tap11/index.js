import './index.css'
import 'bootstrap/dist/css/bootstrap.css'





function Header() {
    return(
        <div className="container">
            <div>
                <h2>Опубликуйте ваш заказ</h2>
                <h4 class="mt-4">Название </h4>
                <div class="form-floating col-4">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Placeholder</label>
                </div>
            </div>
            <div>
                <h4 class="mt-4">Описание </h4>
                <div class="form-floating col-4">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Кратко опишите свой ворк</label>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-12">
                    <h4 class="mt-4">Категория </h4>
                    <div class="form-floating col-12">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Placeholder</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <h4 class="mt-4">Подкатегория </h4>
                    <div class="form-floating col-12">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Placeholder</label>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <h4>Срок выполнения работы в днях</h4>
                <h5>14</h5>
            </div>
            <div class="mt-4">
                <h4>Бюджет в тенге</h4>
                <h5>250 000 </h5>
                <h3 class="mt-5">Документы</h3>
            </div>
            <div className="Header-dv col-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.8957 0C24.7309 0.000735219 25.5315 0.333092 26.1217 0.924L34.7779 9.576C35.0706 9.8689 35.3027 10.2166 35.4609 10.5993C35.6191 10.982 35.7003 11.3921 35.6998 11.8062V38.85C35.6998 39.6854 35.3679 40.4866 34.7772 41.0774C34.1864 41.6681 33.3852 42 32.5498 42H9.4498C8.61437 42 7.81316 41.6681 7.22242 41.0774C6.63168 40.4866 6.2998 39.6854 6.2998 38.85V3.15C6.2998 2.31457 6.63168 1.51335 7.22242 0.922614C7.81316 0.331874 8.61437 0 9.4498 0L23.8957 0ZM28.7845 22.4847C28.3907 22.8784 27.8566 23.0996 27.2998 23.0996C26.743 23.0996 26.2089 22.8784 25.8151 22.4847L23.0998 19.7694V27.3C23.0998 27.857 22.8786 28.3911 22.4847 28.7849C22.0909 29.1787 21.5568 29.4 20.9998 29.4C20.4428 29.4 19.9087 29.1787 19.5149 28.7849C19.1211 28.3911 18.8998 27.857 18.8998 27.3V19.7694L16.1845 22.4847C15.7884 22.8672 15.258 23.0789 14.7074 23.0741C14.1567 23.0693 13.63 22.8485 13.2407 22.4591C12.8513 22.0698 12.6305 21.5431 12.6257 20.9924C12.6209 20.4418 12.8326 19.9114 13.2151 19.5153L19.5151 13.2153C19.9089 12.8216 20.443 12.6004 20.9998 12.6004C21.5566 12.6004 22.0907 12.8216 22.4845 13.2153L28.7845 19.5153C29.1782 19.9091 29.3994 20.4432 29.3994 21C29.3994 21.5568 29.1782 22.0909 28.7845 22.4847Z" fill="#FBA457"/></svg>
                <p class="mt-3">Перетащите файл сюда или нажмите</p>
                <p><a href="#">Загрузить</a></p>
            </div>
            <div className="contaienr text-center">
                <div className="row">
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M9.87174 2.14941H4.53841C4.18479 2.14941 3.84565 2.28989 3.5956 2.53994C3.34555 2.78999 3.20508 3.12913 3.20508 3.48275V14.1494C3.20508 14.503 3.34555 14.8422 3.5956 15.0922C3.84565 15.3423 4.18479 15.4827 4.53841 15.4827H12.5384C12.892 15.4827 13.2312 15.3423 13.4812 15.0922C13.7313 14.8422 13.8717 14.503 13.8717 14.1494V6.14941L9.87174 2.14941Z" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.87402 2.14941V6.14941H13.874" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2074 9.48291H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2074 12.1495H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.20736 6.81616H6.54069H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span class="p-2">food.doc</span>
                    </div>
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.379 0C11.7767 0.000350104 12.158 0.158615 12.439 0.44L16.561 4.56C16.7004 4.69948 16.8109 4.86506 16.8862 5.04729C16.9616 5.22952 17.0002 5.42482 17 5.622V18.5C17 18.8978 16.842 19.2794 16.5607 19.5607C16.2794 19.842 15.8978 20 15.5 20H4.5C4.10218 20 3.72064 19.842 3.43934 19.5607C3.15804 19.2794 3 18.8978 3 18.5V1.5C3 1.10218 3.15804 0.720644 3.43934 0.43934C3.72064 0.158035 4.10218 0 4.5 0L11.379 0ZM10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.11084 10.5184 6.01005 10.2658 6.01233 10.0036C6.0146 9.7414 6.11977 9.49059 6.30518 9.30518C6.49059 9.11977 6.7414 9.0146 7.0036 9.01233C7.2658 9.01005 7.5184 9.11084 7.707 9.293L9 10.586V7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6Z" fill="#656084"/></svg>     
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><g clip-path="url(#clip0_421_521)"><path d="M7.07909 13.0267C10.3378 13.0267 12.9795 10.385 12.9795 7.12634C12.9795 3.86764 10.3378 1.22595 7.07909 1.22595C3.8204 1.22595 1.17871 3.86764 1.17871 7.12634C1.17871 10.385 3.8204 13.0267 7.07909 13.0267Z" stroke="#67C23A" stroke-width="0.885058" stroke-linejoin="round"/><path d="M9.43906 5.3562L6.19385 8.89643L4.71875 7.28724" stroke="#67C23A" stroke-width="0.885058" stroke-linejoin="round"/></g><defs><clipPath id="clip0_421_521"><rect width="14.1609" height="14.1609" fill="white" transform="translate(0 0.0458984)"/></clipPath></defs></svg>                    
                    </div> 
                </div>
            </div>
            <div className="contaienr text-center">
                <div className="row">
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M9.87174 2.14941H4.53841C4.18479 2.14941 3.84565 2.28989 3.5956 2.53994C3.34555 2.78999 3.20508 3.12913 3.20508 3.48275V14.1494C3.20508 14.503 3.34555 14.8422 3.5956 15.0922C3.84565 15.3423 4.18479 15.4827 4.53841 15.4827H12.5384C12.892 15.4827 13.2312 15.3423 13.4812 15.0922C13.7313 14.8422 13.8717 14.503 13.8717 14.1494V6.14941L9.87174 2.14941Z" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.87402 2.14941V6.14941H13.874" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2074 9.48291H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2074 12.1495H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.20736 6.81616H6.54069H5.87402" stroke="#909399" stroke-width="0.885058" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span class="p-2">food.pdf</span>
                    </div>
                    <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.379 0C11.7767 0.000350104 12.158 0.158615 12.439 0.44L16.561 4.56C16.7004 4.69948 16.8109 4.86506 16.8862 5.04729C16.9616 5.22952 17.0002 5.42482 17 5.622V18.5C17 18.8978 16.842 19.2794 16.5607 19.5607C16.2794 19.842 15.8978 20 15.5 20H4.5C4.10218 20 3.72064 19.842 3.43934 19.5607C3.15804 19.2794 3 18.8978 3 18.5V1.5C3 1.10218 3.15804 0.720644 3.43934 0.43934C3.72064 0.158035 4.10218 0 4.5 0L11.379 0ZM10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.11084 10.5184 6.01005 10.2658 6.01233 10.0036C6.0146 9.7414 6.11977 9.49059 6.30518 9.30518C6.49059 9.11977 6.7414 9.0146 7.0036 9.01233C7.2658 9.01005 7.5184 9.11084 7.707 9.293L9 10.586V7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6Z" fill="#656084"/></svg>     
                    </div> 
                </div>
            </div>
            <hr class="hr-max w-25"/>
            <div className="d-flex mt-5">
                <div class="hdr-btn col-10">
                    <button>Назад</button>
                </div>
                <div class="hdr-btn1 col-2">
                    <button>Дальше</button>
                </div>
            </div>
        </div>
    )
}

export default Header;