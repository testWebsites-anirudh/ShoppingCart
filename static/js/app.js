var btnBuy = document.querySelectorAll('.buy');
var localStorage = window.localStorage;

btnBuy.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.nextElementSibling);

        var heading = btn.parentElement.firstElementChild.textContent;
        var src = btn.parentElement.firstElementChild.dataset.src;

        btn.nextElementSibling.innerHTML = `<input type="number" min="0" max="10" placeholder="0" value="0">
                                            <span class="error"></span>
                                            <div class="btns">
                                                <button type="button" class="btnDone">Done</button>
                                            </div>    
                                            `;

        var btnDone = document.querySelectorAll('.btnDone');
        var input = document.querySelectorAll('input');

        input.forEach(i =>{
            i.addEventListener('click',()=>{
                i.value = "";
            });

            i.addEventListener('mouseover',()=>{
                if(i.value <= 0){
                    i.value = "";
                }
            });

            i.addEventListener('mouseout',()=>{
                if(i.value <= 0){
                    i.value = 0;
                }
            });
        });

        btnDone.forEach(btn => {
            btn.addEventListener('click', () => {
                var value = btn.parentElement.previousElementSibling.previousElementSibling.value;

                if(value >= 0 && value <= 10){
                    btn.parentElement.previousElementSibling.innerHTML = "";
                    btn.parentElement.parentElement.innerHTML ="";
                 localStorage.setItem(heading,value);
                 localStorage.setItem(heading+"Src", src);
                }else{
                    btn.parentElement.previousElementSibling.innerHTML = "Purchase Limit: 10"
                }
            });
        });
        
    });


});



