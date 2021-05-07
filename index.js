function validateForm() {
    var fullName = document.forms["myForm"]["fullname"].value;
    var price = document.forms["myForm"]["price"].value;
    var description = document.forms["myForm"]["description"].value;
    var date = document.forms["myForm"]["date"]
    if (fullName == "") {
        alert("Name must be filled out");
        return false;
    }
    if (price == "") {
        alert("Price must be filled out");
        return false;
    }
    if (description == "") {
        alert("Description must be filled out");
        return false;
    }
    if (date == "") {
        alert("Date must be filled out");
        return false;
    }
}