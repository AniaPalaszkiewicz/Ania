document.addEventListener("DOMContentLoaded", function () {

    const edit=document.querySelector(".edit");
    const buttonBold= document.querySelector(".bold");
    const buttonLean= document.querySelector(".lean");
    const buttonPoint= document.querySelector(".point");

    
    
        buttonBold.addEventListener("click",function(){
        
             if(edit.style.fontWeight==="bold"){
                edit.style.fontWeight="";
             }else{
                edit.style.fontWeight="bold"
             }

        });

        buttonLean.addEventListener("click",function(){
        
            if(edit.style.fontStyle==="italic"){
                edit.style.fontStyle="";
            }else{
                edit.style.fontStyle="italic"
            }

        });

        buttonPoint.addEventListener("click",function(){
            
            const ul= document.createElement("ul");
            edit.appendChild(ul);
            const li = document.createElement("li");
            li.textContent='';
            ul.appendChild(li);
            return;
            
        });
        
    

});