# MEAN-MEARN1
Practical exercises for MEAN/MEARN certification

*********************************************************************************
Description
*********************************************************************************
This is a Restful API made using node and uses mongo as the db.
This API allows a user to control a stock of products.
The existing functions are:

- Insert a product with a certain stock,
- Check the list of products,
- Decrease the stock quantity,
- Check the stock of a certain product,
    OUT         0 == 0  
    LOW         1 <= 5  
    MEDIUM      6 <= 15
    HIGH        >= 16


*********************************************************************************
Requirements
*********************************************************************************
To use this API youll need to install postman or a similar tool.
Also make sure the port 3000 is free

*********************************************************************************
How to install
*********************************************************************************
1- Open a command window
2- On the command window go to the root of the folder
3- Run the command "npm install" to install the dependencies
4- Run the command "npm start" to start the API

*********************************************************************************
How to use:
*********************************************************************************
. Insert products:
  -On Postman choose "x-www-form-urlencoded"
  -Choose Post and insert on the url text-box "localhost:3000/stock/"
  -On the body use:
      "productName" as a key and as a value insert a name for the product
      "quantity" as a key and as a value insert the quantity of stock for this product.
  -Press send
  
. Check the product list:
    -On Postman choose "x-www-form-urlencoded"
    -Choose get and insert on the url text-box "localhost:3000/stock/"
    -Press send

. Check the stock of a certain product:
    -On Postman choose "x-www-form-urlencoded"
    -Choose GET and insert on the url text-box "localhost:3000/stock/<name-of-the-product>" 
    -Press send
  
. Decrease stock quantity of a product:
    -On Postman choose "x-www-form-urlencoded"
    -Choose Post and insert on the url text-box "localhost:3000/stock/<name-of-the-product>"
    -On the body use:
        "quantity" as a key and as a value insert the quantity of stock to remove.
    -Press send 

*********************************************************************************
Thank You
*********************************************************************************
