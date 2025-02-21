add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);   
update(); 

 function getAndUpdate(){
 console.log('Updating List...');

 let tit = document.getElementById("title").value;
 let des = document.getElementById("description").value;
 if(localStorage.getItem('itemsJson')==null){
     itemJsonArray = [];
     itemJsonArray.push([tit,des]);
     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
 }
 else{
     itemJsonArrayStr = localStorage.getItem('itemsJson');
     itemJsonArray = JSON.parse(itemJsonArrayStr);
     itemJsonArray.push([tit,des]);
     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
 }
 update();

 }
 function update(){
     if(localStorage.getItem('itemsJson')==null){
     itemJsonArray = [];
     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
 }
 else{
     itemJsonArrayStr = localStorage.getItem('itemsJson');
     itemJsonArray = JSON.parse(itemJsonArrayStr);
 }

 let tablebody = document.getElementById('tablebody');
 let str = "";
 itemJsonArray.forEach((element,index) => {
 str += `
  <tr>
     <th scope="row">${index+1}</th>
     <td>${element[0]}</td>
     <td>${element[1]}</td>
     <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
 </tr>`;
});
tablebody.innerHTML = str;
 }

function deleted(itemIndex){
 console.log("Deleted", itemIndex);
 itemJsonArrayStr = localStorage.getItem('itemsJson');
 itemJsonArray = JSON.parse(itemJsonArrayStr);
 itemJsonArray.splice(itemIndex, 1);

 localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
 update();
}

clr = document.getElementById("cleared");
clr.addEventListener("click", ()=>{
 confirm("Do you really want to clear the list");
 localStorage.clear();
 update();
})

