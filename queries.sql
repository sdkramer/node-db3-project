-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select product.productname, Category.CategoryName
from Category
join Product on Category.id = Product.CategoryId;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select "Order".id, shipper.CompanyName
from "Order"
join Shipper on "Order".ShipVia = Shipper.Id
where "Order".OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select product.ProductName, product.QuantityPerUnit
from "Order"
join OrderDetail on "Order".Id = OrderDetail.OrderId
join Product on product.id = OrderDetail.ProductId
where "order".id = 10251
order By Product.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select "Order".Id OrderId, Customer.CompanyName, Employee.LastName Employee
from "Order"
join Customer on "Order".CustomerId = Customer.Id
join Employee on Employee.Id = "Order".EmployeeId;
