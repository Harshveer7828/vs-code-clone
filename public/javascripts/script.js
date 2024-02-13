function folderoff(){
    var a=document.querySelectorAll(".fileName form input").forEach(function(e){
        e.style.display="none";
        console.log(e)
    })
}

// folder icons
document.querySelector(".new-file-create")
.addEventListener("click",function(){
    folderoff()
    document.querySelector("#fileForm .fileField").style.display="initial"
})
document.querySelector(".ri-folder-2-line")
.addEventListener("click",function(){
    folderoff()
    document.querySelector("#folderForm .fileField").style.display="initial"
})

document.querySelector(".file-wrapper").addEventListener("click",(dets)=>{
    if(dets.id='nameOffile'){
        document.querySelector(".File-nav h3").innerHTML=``;
        document.querySelector(".File-nav h3").style.display='flex';
    }
})


// file creation on click
document.querySelector(".ri-pencil-fill")
.addEventListener("click",()=>{
document.querySelector(".fileRename").style.display="flex"
})

