$(document).ready(function(){
 var pitsa=`
     <div class="row cl">
     <div class="col-12 taom1">Pitsa</div>
     <div class="col-xl-5 col-sm-12 col-md-12 xl">
    <div class="bolim1">
      <img src="rasmlar/pitsa1.png" alt="">
      <div class="bolim2">
        <div class="gavaya1">
             <h1 class="gavaya">Gavaya</h1>
             <img src="rasmlar/sir.png" alt="" ></div>
      <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
     <div class="summa">
       <div class="summa1">45,000 UZS</div>
     <a href="#" class="summa2">+</a>
     </div> </div></div> </div>
     <div class="col-xl-5 col-sm-12 col-md-12 xl">
      <div class="bolim3 pts">
        <img src="rasmlar/pitsa2.png" alt="">
        <div class="bolim2">
          <div class="gavaya1">
               <h1 class="gavaya">Mexica</h1>
               <img src="rasmlar/qalampir.png" alt="" class="qalampir" ></div>
         <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
       <div class="summa">
         <div class="summa1">53,000 UZS</div>
       <a href="#" class="summa2">+</a></div> </div></div> </div>
       <div class="col-xl-5 col-sm-12 xl col-md-12 korinmas">
        <div class="bolim1">
          <img src="rasmlar/pitsa3.png" alt="">
          <div class="bolim2">
            <div class="gavaya1">
                 <h1 class="gavaya">Hot achchiko</h1>
                 <img src="rasmlar/bark.png" alt="" class="img-fluid"> </div>
          <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
         <div class="summa">
           <div class="summa1">64,000 UZS</div>
         <a href="#" class="summa2">+</a> </div>  </div></div> </div>
         <div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
          <div class="bolim3">
            <img src="rasmlar/pitsa4.png" alt="">
            <div class="bolim2">
              <div class="gavaya1">
                   <h1 class="gavaya">Mexica</h1></div>
           <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
           <div class="summa">
             <div class="summa1">45,000 UZS</div>
           <a href="#" class="summa2">+</a></div></div></div> </div>
     <div class="col-xl-5 col-sm-12 col-md-12 xl ">
            <div class="bolim1">
              <img src="rasmlar/pitsa3.png" alt="">
              <div class="bolim2">
                <div class="gavaya1">
                     <h1 class="gavaya">Apocalipo</h1>
                     <img src="rasmlar/qalampir.png" alt="" class="img-fluid"> </div>
              <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
             <div class="summa">
               <div class="summa1">45,000 UZS</div>
             <a href="#" class="summa2">+</a> </div> </div> </div>  </div>
             <div class="col-xl-5 col-sm-12 xl col-md-12 korinmas">
              <div class="bolim3">
                <img src="rasmlar/pitsa4.png" alt="">
                <div class="bolim2">
                  <div class="gavaya1">
                       <h1 class="gavaya">Sosiskacho</h1>
                       <img src="rasmlar/bark.png" alt="" class="qalampir">  </div>
                <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
               <div class="summa">
                 <div class="summa1">53,000 UZS</div>
               <a href="#" class="summa2">+</a>
               </div> </div> </div> </div>
               <div class="col-xl-5 col-sm-12  col-md-12 xl korinmas">
                <div class="bolim1">
                  <img src="rasmlar/pitsa2.png" alt="">
                  <div class="bolim2">
                    <div class="gavaya1">
                         <h1 class="gavaya">Gavaya</h1>  </div>
                              <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
                 <div class="summa">
                   <div class="summa1">45,000 UZS</div>
                 <a href="#" class="summa2">+</a></div> </div></div> </div>
                 <div class="korish1"></div>
                 <div class="button">Ko‘proq ko‘rish</div> 
       `
     var burger=`
     <div class="row cl">
     <div class="col-12 taom1">Burger</div> 
           <div class="col-xl-5 col-sm-12 col-md-12 xl">
            <div class="bolim1">
              <img src="rasmlar/burger1.png" alt="">
              <div class="bolim2">
                <div class="gavaya1">
                     <h1 class="gavaya">Cheeseburger</h1>
                     <img src="rasmlar/sir.png" alt="" > </div>
                       <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
             <div class="summa">
               <div class="summa1">23,000 UZS</div>
             <a href="#" class="summa2">+</a></div></div></div> </div>
             <div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
              <div class="bolim3">
                <img src="rasmlar/burger1.png" alt="">
                <div class="bolim2">
                  <div class="gavaya1">
                       <h1 class="gavaya">Chili burger</h1>
                       <img src="rasmlar/qalampir.png" alt="" class="qalampir" > </div>
                  <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
               <div class="summa">
                 <div class="summa1">23,000 UZS</div>
               <a href="#" class="summa2">+</a></div></div></div></div>
               <div class="col-xl-5 col-sm-12 xl col-md-12 ">
                <div class="bolim1">
                  <img src="rasmlar/burger1.png" alt="">
                  <div class="bolim2">
                    <div class="gavaya1">
                         <h1 class="gavaya">Hamburger</h1> </div><p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
                 <div class="summa">
                   <div class="summa1">64,000 UZS</div>
                 <a href="#" class="summa2">+</a></div></div></div></div>
                 <div class="col-xl-5 col-sm-12 col-md-12 xl ">
                  <div class="bolim3 kichik">
                    <img src="rasmlar/burger1.png" alt="">
                    <div class="bolim2">
                      <div class="gavaya1">
                           <h1 class="gavaya">Double Burger</h1> </div>
   <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
                   <div class="summa">
                     <div class="summa1">45,000 UZS</div>
                   <a href="#" class="summa2">+</a></div>
                   
                    </div>
                  </div>
                   </div>
                   <div class="korish2"></div>
                   <div class="button2">Ko‘proq ko‘rish</div>
     `
     var kombo=`
     <div class="row cl">
     <div class="col-12 taom1">Kombo</div> 
     <div class="col-xl-5 col-sm-12 col-md-12 xl">
      <div class="bolim1">
        <img src="rasmlar/kombo.png" alt="">
        <div class="bolim2">
          <div class="gavaya1">
               <h1 class="gavaya">Kombo-1</h1>
              
          </div>
       
          <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
       <div class="summa">
         <div class="summa1">25,000 UZS</div>
       <a href="#" class="summa2">+</a>
       </div>
       
        </div>
      </div>
       </div>
       <div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
        <div class="bolim3">
          <img src="rasmlar/Bitmap (5).png" alt="">
          <div class="bolim2">
            <div class="gavaya1">
                 <h1 class="gavaya">Kombo-2</h1>
                
            </div>
         
            <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
         <div class="summa">
           <div class="summa1">23,000 UZS</div>
         <a href="#" class="summa2">+</a>
         </div>
         
          </div>
        </div>
         </div>
         <div class="col-xl-5 col-sm-12 xl col-md-12 ">
          <div class="bolim1">
            <img src="rasmlar/kombo.png" alt="">
            <div class="bolim2">
              <div class="gavaya1">
                   <h1 class="gavaya">Kombo-3</h1>
               
              </div>
           
              <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
           <div class="summa">
             <div class="summa1">64,000 UZS</div>
           <a href="#" class="summa2">+</a>
           </div>
           </div>
            </div>
          </div>
           </div>
     
     `
     var suv=`
     <div class="row cl">
     <div class="col-12 taom1">Ichimliklar</div>  
     <div class="col-xl-5 col-sm-12 col-md-12 xl">
      <div class="bolim1">
        <img src="rasmlar/suv1.png" alt="">
        <div class="bolim2">
          <div class="gavaya1">
               <h1 class="gavaya">Sprite 1L</h1>
              
          </div>
       
          <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
       <div class="summa">
         <div class="summa1">25,000 UZS</div>
       <a href="#" class="summa2">+</a>
       </div>
       
        </div>
      </div>
       </div>
       <div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
        <div class="bolim3">
          <img src="rasmlar/suv2.png" alt="">
          <div class="bolim2">
            <div class="gavaya1">
                 <h1 class="gavaya">Coca cola 1,5L</h1>
                
            </div>
         
            <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
         <div class="summa">
           <div class="summa1">23,000 UZS</div>
         <a href="#" class="summa2">+</a>
         </div>
         
          </div>
        </div>
         </div>
         <div class="col-xl-5 col-sm-12 xl col-md-12 ">
          <div class="bolim1">
            <img src="rasmlar/suv3.png" alt="">
            <div class="bolim2">
              <div class="gavaya1">
                   <h1 class="gavaya">Fanta 1L</h1>
               
              </div>
           
              <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
           <div class="summa">
             <div class="summa1">64,000 UZS</div>
           <a href="#" class="summa2">+</a>
           </div>
           </div
            </div>
          </div>
           </div>
     `
 var salat=`
 <div class="row cl ">
 <div class="col-12 taom1">Salat</div> 
<div class="col-xl-5 col-sm-12 col-md-12 xl">
<div class="bolim1 salat">
  <img src="rasmlar/salt1.jpg" alt="">
  <div class="bolim2">
    <div class="gavaya1">
         <h1 class="gavaya ">Salat-1</h1>
       
    </div>
 
    <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
 <div class="summa">
   <div class="summa1">23,000 UZS</div>
 <a href="#" class="summa2">+</a>
 </div>
 
  </div>
</div>
 </div>
 <div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
  <div class="bolim3 salat">
    <img src="rasmlar/salt2.jpg" alt="">
    <div class="bolim2">
      <div class="gavaya1">
           <h1 class="gavaya ">salat-2</h1>
      </div>
   
      <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
   <div class="summa">
     <div class="summa1">23,000 UZS</div>
   <a href="#" class="summa2">+</a>
   </div>
   
    </div>
  </div>
   </div>
   <div class="col-xl-5 col-sm-12 xl col-md-12 ">
    <div class="bolim1 salat">
      <img src="rasmlar/salt3.jpg" alt="">
      <div class="bolim2">
        <div class="gavaya1">
             <h1 class="gavaya ">salat-3</h1>
         
        </div>
     
        <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
     <div class="summa">
       <div class="summa1">64,000 UZS</div>
     <a href="#" class="summa2">+</a>
     </div>
     
      </div>
    </div>
     </div>
</div>
 
 `
 var tortlar=`
 <div class="row cl">
 <div class="col-12 taom1">Shirinlik</div> 
<div class="col-xl-5 col-sm-12 col-md-12 xl">
<div class="bolim1">
<img src="rasmlar/tort1.jpg" alt="">
<div class="bolim2">
  <div class="gavaya1">
       <h1 class="gavaya">shirinlik-1</h1>
     
  </div>

  <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
<div class="summa">
 <div class="summa1">23,000 UZS</div>
<a href="#" class="summa2">+</a>
</div>

</div>
</div>
</div>
<div class="col-xl-5 col-sm-12 col-md-12 xl korinmas">
<div class="bolim3 salat">
  <img src="rasmlar/tort2.jpg" alt="">
  <div class="bolim2">
    <div class="gavaya1">
         <h1 class="gavaya">shirinlik-2</h1>
    </div>
 
    <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
 <div class="summa">
   <div class="summa1">23,000 UZS</div>
 <a href="#" class="summa2">+</a>
 </div>
 
  </div>
</div>
 </div>
 <div class="col-xl-5 col-sm-12 xl col-md-12 ">
  <div class="bolim1 salat">
    <img src="rasmlar/tort3.jpg" alt="">
    <div class="bolim2">
      <div class="gavaya1">
           <h1 class="gavaya">shirinlik-3</h1>
       
      </div>
   
      <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
   <div class="summa">
     <div class="summa1">64,000 UZS</div>
   <a href="#" class="summa2">+</a>
   </div>
   
    </div>
  </div>
   </div>
   <div class="col-xl-5 col-sm-12 col-md-12 xl ">
    <div class="bolim3 salat puto">
      <img src="rasmlar/tort4.jpg" alt="">
      <div class="bolim2">
        <div class="gavaya1">
             <h1 class="gavaya">shirinlik-4</h1>
        </div>
     
        <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
     <div class="summa">
       <div class="summa1">45,000 UZS</div>
     <a href="#" class="summa2">+</a>
     </div>
     
      </div>
    </div>
     </div>  </div>
 `
 var qoshimcha= `
 <div class="row cl">
  <div class="col-xl-5 col-sm-12 xl col-md-12 ">
  <div class="bolim1">
    <img src="rasmlar/burger1.png" alt="">
    <div class="bolim2">
      <div class="gavaya1">
           <h1 class="gavaya">Burger</h1> </div>
    <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
   <div class="summa">
     <div class="summa1">45,000 UZS</div>
   <a href="#" class="summa2">+</a>
   </div></div> </div></div> </div>
 `
 var qoshimcha2=`
 <div class="row cl">
 <div class="col-xl-5 col-sm-12 xl col-md-12 ">
 <div class="bolim1">
   <img src="rasmlar/pitsa3.png" alt="">
   <div class="bolim2">
     <div class="gavaya1">
          <h1 class="gavaya">Hot achchiko</h1>
          <img src="rasmlar/bark.png" alt="" class="img-fluid">
     </div>
  
     <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
  <div class="summa">
    <div class="summa1">64,000 UZS</div>
  <a href="#" class="summa2">+</a>
  </div>
  
   </div>
 </div>
  </div>
  <div class="col-xl-5 col-sm-12 col-md-12 xl ">
   <div class="bolim3">
     <img src="rasmlar/pitsa4.png" alt="">
     <div class="bolim2">
       <div class="gavaya1">
            <h1 class="gavaya">Mexica</h1>
       </div>
    
       <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
    <div class="summa">
      <div class="summa1">45,000 UZS</div>
    <a href="#" class="summa2">+</a>
    </div>
    
     </div>
   </div>
    </div>
    <div class="col-xl-5 col-sm-12 xl col-md-12 ">
    <div class="bolim3">
      <img src="rasmlar/pitsa4.png" alt="">
      <div class="bolim2">
        <div class="gavaya1">
             <h1 class="gavaya">Sosiskacho</h1>
             <img src="rasmlar/bark.png" alt="" class="qalampir">
        </div>
     
        <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
     <div class="summa">
       <div class="summa1">53,000 UZS</div>
     <a href="#" class="summa2">+</a>
     </div>
     
      </div>
    </div>
     </div>
     <div class="col-xl-5 col-sm-12  col-md-12 xl ">
      <div class="bolim1">
        <img src="rasmlar/pitsa2.png" alt="">
        <div class="bolim2">
          <div class="gavaya1">
               <h1 class="gavaya">Gavaya</h1>
          
          </div>
       
          <p class="matn"> Горячая закуска с митболами  из говядины, томатами, моцареллой и соусом чипотле </p>
       <div class="summa">
         <div class="summa1">45,000 UZS</div>
       <a href="#" class="summa2">+</a>
       </div>
       </div>
        </div>
      </div>
       </div>
 `
 var s= pitsa + burger+kombo+suv+salat+tortlar
$("#femly").click(function(){
 $(".javob").html(s)
  $(".javob").toggleClass("sakkiz")
 $(".button").click(function(){
  $(".korish1").html(qoshimcha2)
  $(".korish1").toggleClass("sakkiz")
})
$(".button2").click(function(){
  $(".korish2").html(qoshimcha)
  $(".korish2").toggleClass("sakkiz")
})})
  $("#ikki").click(function(){
    $(".javob").html(pitsa)
    $(".button").click(function(){
    $(".korish1").html(qoshimcha2)
  $(".korish1").toggleClass("sakkiz")
})
  }) 
 $("#uch").click(function(){
  $(".javob").html(burger)
  $(".button2").click(function(){
    $(".korish2").html(qoshimcha)
  $(".korish2").toggleClass("sakkiz")
 })
 })
 $("#kombo").click(function(){
  $(".javob").html(kombo)
 })
 $("#suv").click(function(){
  $(".javob").html(suv)
 })
 $("#tort").click(function(){
  $(".javob").html(tortlar)
 })
 $("#salat").click(function(){
  $(".javob").html(salat)
 })
 let aray=["Kompaniya haqida","Filiallar","Bolalar uchun"]
 $(".panel2").click(function(){
    let list=''
     for(let i of aray){
         list+=`
         <div class="accardion ">
         <a href="#" class="panel">${i}  </a> <br>
          </div>
         ` }
     $(".panel4").html(list)
 $(".panel4").toggleClass("sakkiz")
 })
 let arra=["Menyu","Bonusli karta","Bu qanday ishlaydi? "]
 $(".panel5").click(function(){
    let list=''
     for(let i of arra){
         list+=`
         <div class="accardion men">
         <a href="#" class="panel">${i}  </a> <br>
      </div>
         ` }
     $(".panel6").html(list)
     $(".panel6").toggleClass("sakkiz")
 })
})