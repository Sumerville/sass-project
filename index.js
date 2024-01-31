$("#img1").on("mouseenter", function(){
    $("#img1").attr("src", " ./images/Austin3.jpg");
      });
    
      $("#img1").mouseleave(function(){
        $("#img1").attr("src", " ./images/Austi2.jpg");
          });





          // $(document).ready(function () {
          //   (".grid1").mouseenter(function () {
          //       $(".grids-overlay1").fadeIn(200);
          //     }).mouseleave(function () {
          //       $(".grids-overlay1").fadeOut(200);
          //     });
          // });
          $(document).ready(function () {
           $(".grid2").mouseenter(function () {
                $(".grids-overlay2").fadeIn(200);
              }).mouseleave(function () {
                $(".grids-overlay2").fadeOut(200);
              });
          });
          $(document).ready(function () {
            $(".grid3").mouseenter(function () {
                $(".grids-overlay3").fadeIn(200);
              }).mouseleave(function () {
                $(".grids-overlay3").fadeOut(200);
              });
          });

          $(document).ready(function () {
            $(".grid4")
              .mouseenter(function () {
                $(".grids-overlay4").fadeIn(200);
              })
              .mouseleave(function () {
                $(".grids-overlay4").fadeOut(200);
              });
          });

          $(document).ready(function () {
            $(".grid5")
              .mouseenter(function () {
                $(".grids-overlay5").fadeIn(200);
              })
              .mouseleave(function () {
                $(".grids-overlay5").fadeOut(200);
              });
          });



          $(document).ready(function () {
            $(".grid6")
              .mouseenter(function () {
                $(".grids-overlay6").fadeIn(200);
              })
              .mouseleave(function () {
                $(".grids-overlay6").fadeOut(200);
              });
          });

          
          $(document).ready(function () {
            $(".grid7")
              .mouseenter(function () {
                $(".grids-overlay7").fadeIn(200);
              })
              .mouseleave(function () {
                $(".grids-overlay7").fadeOut(200);
              });
          });

          $(document).ready(function () {
            $(".about-me").animate(
              {
               width: "500px",
               height: "500px",
              },
              6000,
              function () {
                $(".fading").fadeIn(200)
              }
            );
          });



          let name=document.getElementById("my_name");
          let nameError=document.getElementById("nameError");
          let email=document.getElementById("mail");
          let mailError=document.getElementById("emailError");
          let message=document.getElementById("msg");
          let msgError=document.getElementById("msgError");  
          
          let submitbtn=document.getElementById("submitbtn");


          submitbtn.addEventListener("click", function(e){
            e.preventDefault()
            Validate()
        });

        function Validate(){
          if(my_name.value==""||my_name.value==null){
              nameError.innerHTML="Name Required"  
          }else{
              nameError.innerHTML=""
              my_name.value=""
             
          }
          console.log(my_name.value)

          if(mail.value==""||mail.value==null){
            emailError.innerHTML="Email Required"  
        }else{
            mailError.innerHTML=""
            mail.value=""
          
        }
        console.log(mail.value)

        if(msg.value==""||msg.value==null){
          msgError.innerHTML="Required"  
      }else{
          msgError.innerHTML=""
          msg.value=""
        

      }
      console.log(msg.value)

        }

        const popup = document.querySelector("#pop");

document.querySelector("#popbtn").addEventListener("click", () =>{
  popup.style.display = "block";
})

document.querySelector("#dbtn").addEventListener("click", () =>{
  popup.style.display = "none";
})


        

          