function doClick(e) {
    alert($.label.text);
}

//$.label.text= "foo";
$.label.text = Alloy.Models.user.validateAuth();
$.index.open();
