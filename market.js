function loadXMLDoc() {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      myFunction(this);

    }

  };

  xmlhttp.open("GET", "product.xml", true);

  xmlhttp.send();

}



function myFunction(xml) {

  var product_code, product_name, product_details, product_price, product_quantity, i, xmlDoc, txt1, txt2, txt3, txt4, txt5  ;

  xmlDoc = xml.responseXML;

  txt1 = "";

  txt2 = "";

  txt3 = "";

  txt4 = "";

  txt5 = "";

  product_code = xmlDoc.getElementsByTagName("product_code");

  product_name = xmlDoc.getElementsByTagName("product_name");

  product_details = xmlDoc.getElementsByTagName("product_details");

  product_price = xmlDoc.getElementsByTagName("product_price");

  product_quantity = xmlDoc.getElementsByTagName("product_quantity");



  for (i = 0; i < product_code.length; i++) {

      txt1 += product_code[i].childNodes[0].nodeValue + "<br>";

      txt2 += product_name[i].childNodes[0].nodeValue + "<br>";

      txt3 += product_details[i].childNodes[0].nodeValue + "<br>";

      txt4 += product_price[i].childNodes[0].nodeValue + "<br>";

      txt5 += product_quantity[i].childNodes[0].nodeValue + "<br>";

    }

    document.getElementById("demo1").innerHTML = txt1;

    document.getElementById("demo2").innerHTML = txt2;

    document.getElementById("demo3").innerHTML = txt3;

    document.getElementById("demo4").innerHTML = txt4;

    document.getElementById("demo5").innerHTML = txt5;

}

function loadXMLDoc1() {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      myFunction1(this);

    }

  };

  xmlhttp.open("GET", "customer.xml", true);

  xmlhttp.send();

}



function myFunction1(xml) {

  var customer_code, customer_firstname, customer_lastname, customer_age, customer_phon, i, xmlDoc, txt1, txt2, txt3, txt4, txt5  ;

  xmlDoc = xml.responseXML;

  txt1 = "";

  txt2 = "";

  txt3 = "";

  txt4 = "";

  txt5 = "";

  customer_code = xmlDoc.getElementsByTagName("customer_code");

  customer_firstname = xmlDoc.getElementsByTagName("customer_firstname");

  customer_lastname = xmlDoc.getElementsByTagName("customer_lastname");

  customer_age = xmlDoc.getElementsByTagName("customer_age");

  customer_phon = xmlDoc.getElementsByTagName("customer_phon");



  for (i = 0; i < customer_code.length; i++) {

      txt1 += customer_code[i].childNodes[0].nodeValue + "<br>";

      txt2 += customer_firstname[i].childNodes[0].nodeValue + "<br>";

      txt3 += customer_lastname[i].childNodes[0].nodeValue + "<br>";

      txt4 += customer_age[i].childNodes[0].nodeValue + "<br>";

      txt5 += customer_phon[i].childNodes[0].nodeValue + "<br>";

    }

    document.getElementById("demo6").innerHTML = txt1;

    document.getElementById("demo7").innerHTML = txt2;

    document.getElementById("demo8").innerHTML = txt3;

    document.getElementById("demo9").innerHTML = txt4;

    document.getElementById("demo10").innerHTML = txt5;

}



function loadXMLDoc2() {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      myFunction2(this);

    }

  };

  xmlhttp.open("GET", "employee.xml", true);

  xmlhttp.send();

}



function myFunction2(xml) {

  var employee_code, employee_firstname, employee_lastname, employee_age, employee_phon, i, xmlDoc, txt1, txt2, txt3, txt4, txt5  ;

  xmlDoc = xml.responseXML;

  txt1 = "";

  txt2 = "";

  txt3 = "";

  txt4 = "";

  txt5 = "";

  employee_code = xmlDoc.getElementsByTagName("employee_code");

  employee_firstname = xmlDoc.getElementsByTagName("employee_firstname");

  employee_lastname = xmlDoc.getElementsByTagName("employee_lastname");

  employee_age = xmlDoc.getElementsByTagName("employee_age");

  employee_phon = xmlDoc.getElementsByTagName("employee_phon");



  for (i = 0; i < employee_code.length; i++) {

      txt1 += employee_code[i].childNodes[0].nodeValue + "<br>";

      txt2 += employee_firstname[i].childNodes[0].nodeValue + "<br>";

      txt3 += employee_lastname[i].childNodes[0].nodeValue + "<br>";

      txt4 += employee_age[i].childNodes[0].nodeValue + "<br>";

      txt5 += employee_phon[i].childNodes[0].nodeValue + "<br>";

    }

    document.getElementById("demo11").innerHTML = txt1;

    document.getElementById("demo12").innerHTML = txt2;

    document.getElementById("demo13").innerHTML = txt3;

    document.getElementById("demo14").innerHTML = txt4;

    document.getElementById("demo15").innerHTML = txt5;

}



function loadXMLDoc3() {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      myFunction3(this);

    }

  };

  xmlhttp.open("GET", "purchase.xml", true);

  xmlhttp.send();

}



function myFunction3(xml) {

  var purchase_code, purchase_name, purchase_price, purchase_quantity, purchase_MMY, i, xmlDoc, txt1, txt2, txt3, txt4, txt5  ;

  xmlDoc = xml.responseXML;

  txt1 = "";

  txt2 = "";

  txt3 = "";

  txt4 = "";

  txt5 = "";

  purchase_code = xmlDoc.getElementsByTagName("purchase_code");

  purchase_name = xmlDoc.getElementsByTagName("purchase_name");

  purchase_price = xmlDoc.getElementsByTagName("purchase_price");

  purchase_quantity = xmlDoc.getElementsByTagName("purchase_quantity");

  purchase_MMY = xmlDoc.getElementsByTagName("purchase_MMY");



  for (i = 0; i < purchase_code.length; i++) {

      txt1 += purchase_code[i].childNodes[0].nodeValue + "<br>";

      txt2 += purchase_name[i].childNodes[0].nodeValue + "<br>";

      txt3 += purchase_price[i].childNodes[0].nodeValue + "<br>";

      txt4 += purchase_quantity[i].childNodes[0].nodeValue + "<br>";

      txt5 += purchase_MMY[i].childNodes[0].nodeValue + "<br>";

    }

    document.getElementById("demo16").innerHTML = txt1;

    document.getElementById("demo17").innerHTML = txt2;

    document.getElementById("demo18").innerHTML = txt3;

    document.getElementById("demo19").innerHTML = txt4;

    document.getElementById("demo20").innerHTML = txt5;

}