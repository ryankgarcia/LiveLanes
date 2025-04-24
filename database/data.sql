-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:
-- write your vehicle information here..keep its short and only add 3 vehicles to get started (done)
-- this goes first, then pgweb, then http to test the server endpoint, after the server then you can
-- check the font end that will have a fetch call to call the data from the backend
 insert into "vehicles" ("vin", "year","make", "model","trim","bodyType","exteriorColor","interiorColor","transmission","engine","fuelType","mileage","sellerName","conditionReport","damages","reservePrice")
   values
     ('1FJKDNV382B129438','2009','Toyota','Yaris','Base','Sedan','light blue','black','automatic','1.8L - 4cy','Gasoline','124967','Bobs Car Resale','3.8 overall rating, has trouble starting, white smoke comes out of exhaust','broken mirror LH, seats stained, dents on hood, missing hubcaps','4300'),
     ('3FMCJEF2SEC000865', '2008', 'Honda', 'Accord', 'EX','Sedan', 'gray','black','automatic','2.4L - 4cy', 'Gasoline','203564','Greg Sells Cars','2.2 overall rating, battery inoperable, dents in rear bumper, tire tread 2/32','dents in LR door, hood minor scratches, stained passenger seat','3900'),
     ('2FHCNEMSWWQR012865','2006','Ford','Ranger','XLT','Pickup', 'red','tan','automatic', '3.0L - 6cy', 'Gasoline','102998','Joes Vehicles Resale','3.1 overall rating, minor dents on hood, dents in rear bumper, missing spare tire','missing RH passenger window, missing bed liner, no lift gate', '2900');
