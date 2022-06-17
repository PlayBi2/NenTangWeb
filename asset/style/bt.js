var ListOption = document.querySelectorAll('.list-selection .selection-item');

for(var i =0;i<ListOption.length;i++){
    ListOption[i].onclick = function(e){
        // for(var j=0;j<ListOption.length;j++){
        //     if(i!=j){
        //         e.style.display = 'none';
        //     }
        // }
        console.log(e);
    }
}


// console.log(ListOption)