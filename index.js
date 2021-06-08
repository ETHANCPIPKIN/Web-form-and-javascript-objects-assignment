class ItemListing {
    constructor() {
        this.fullName ='fullName';
        this.price = 'price';
        this.description = 'description';
        this.date = 'date'; 
    }
}

function validateForm() {
    var fullName = document.forms["myForm"]["fullname"].value;
    var price = document.forms["myForm"]["price"].value;
    var description = document.forms["myForm"]["description"].value;
    var date = document.forms["myForm"]["date"].value;
    let item = ItemListing(fullName, price, description, date);
    if (item.fullName == "") {
        alert("Name must be filled out");
        return false;
    }
    if (item.price == "") {
        alert("Price must be filled out");
        return false;
    }
    if (item.description == "") {
        alert("Description must be filled out");
        return false;
    }
    if (item.date == "") {
        alert("Date must be filled out");
        return false;
    }
    var data = document.getElementById("formData");
    
}