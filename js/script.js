

var form = document.getElementById('myOrderForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var name = document.getElementById('name').value;
    
    
    alert("Thank you " + name + "! Your order was submitted.");
    
    
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('notes').value = "";
});