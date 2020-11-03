// import Category from '../model/Category';
// import Meals from '../model/Meals';

// export const CATEGORIES = [
//     new Category('c1', 'Italian', '#f5428d'),
//     new Category('c2', 'Pakistani', '#f54242'),
//     new Category('c3', 'Fast Food', '#f5a442'),
//     new Category('c5', 'Continental', '#368dff'),
//     new Category('c6', 'Chinese', '#b9ffb0'),
//     new Category('c7', 'Breakfast', '#9eecff'),
//     new Category('c8', 'French','#ffc7ff'),
//     new Category('c9', 'Exotic', '#47fced')
// ]

// export const MEALS =[
//     new Meals('m1','c1','Alfredo Pasta',200,''),
//     new Meals('m2','c1','Cheese Pasta',250,''),
//     new Meals('m3','c1','Spaghetti',250,''),
//     new Meals('m4','c1','Pizza(Medium)',400,''),
//     new Meals('m5','c1','Garlic bread',100,''),
//     new Meals('m6','c1','Flavoured Pizza(Medium)',600,''),
//     new Meals('m7','c1','Mushroom Risotto',450,''),

//     new Meals('m8','c2','Biryani',100,''),
//     new Meals('m9','c2','Nihari',200,''),
//     new Meals('m10','c2','Pulao',100,''),
//     new Meals('m11','c2','Chicken karahi',600,''),
//     new Meals('m12','c2','Chicken handi',600,''),
//     new Meals('m13','c2','Mutton Karahi',900,''),
//     new Meals('m14','c2','Mutton Pulao',900,''),

//     new Meals('m15','c3','Broast',200,''),
//     new Meals('m16','c3','Cheese Burger',150,''),
//     new Meals('m17','c3','Chicken Sandwich',250,''),
//     new Meals('m18','c3','Beef Burger',180,''),
//     new Meals('m19','c3','Fried Wings',200,''),
//     new Meals('m20','c3','French Fries',100,''),
//     new Meals('m21','c3','Mayo Garlic Fries',150,''),

//     new Meals('m22','c5','Pan Fry Teriyaki Chicken',200,''),
//     new Meals('m23','c5','Singapore Rice Noodles',200,''),
//     new Meals('m24','c5','Dal Makhani',200,''),
//     new Meals('m25','c5','Lamb Biryani',300,''),
//     new Meals('m26','c5','Shish Kebabs',300,''),
//     new Meals('m27','c5','Roasted Ducks with Apples',800,''),
//     new Meals('m28','c5','Frikkadels (South African meat balls)',200,''),

// ]
import Category from '../model/Category';
import Meals from '../model/Meals';

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Pakistani', '#f54242'),
    new Category('c3', 'Fast Food', '#f5a442'),
    new Category('c5', 'Continental', '#368dff'),
    new Category('c6', 'Chinese', '#b9ffb0'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'French','#ffc7ff'),
    new Category('c9', 'Exotic', '#47fced')
]

export const MEALS =[
    new Meals('m1','c1','Alfredo Pasta',200,'https://www.budgetbytes.com/wp-content/uploads/2017/07/Lighter-Spinach-Alfredo-Pasta-finished.jpg'),
    new Meals('m2','c1','Cheese Pasta',250,'https://i.pinimg.com/474x/7f/2b/09/7f2b09c0bdb85d6bde1180652c69bea3.jpg'),
    new Meals('m3','c1','Spaghetti',250,'https://image.shutterstock.com/image-photo/creamy-speghetti-carbonara-perfect-dinner-600w-1522897772.jpg'),
    new Meals('m4','c1','Pizza(Medium)',400,'https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-600w-794244712.jpg'),
    new Meals('m5','c1','Garlic bread',100,'https://image.shutterstock.com/image-photo/garlic-herb-bread-slices-600w-142418746.jpg'),
    new Meals('m6','c1','Flavoured Pizza(Medium)',600,'https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-600w-1060535249.jpg'),
    new Meals('m7','c1','Mushroom Risotto',450,'https://image.shutterstock.com/image-photo/mushroom-risotto-on-white-plate-600w-539174890.jpg'),

    new Meals('m8','c2','Biryani',100,'https://image.shutterstock.com/image-photo/chicken-kabsa-homemade-arabian-biryani-600w-1048188121.jpg'),
    new Meals('m9','c2','Nihari',200,'https://image.shutterstock.com/image-photo/beef-nehari-served-naan-600w-1502297891.jpg'),
    new Meals('m10','c2','Pulao',100,'https://image.shutterstock.com/image-photo/mutton-pulao-on-wooden-table-600w-780144226.jpg'),
    new Meals('m11','c2','Chicken karahi',600,'https://image.shutterstock.com/image-photo/muglai-lababdaar-chicken-indian-curry-600w-1513610699.jpg'),
    new Meals('m12','c2','Chicken handi',600,'https://image.shutterstock.com/image-photo/desi-bbq-chicken-handi-karahi-600w-1512147974.jpg'),
    new Meals('m13','c2','Mutton Karahi',900,'https://image.shutterstock.com/image-photo/bhuna-gosht-mutton-masala-indian-600w-770732686.jpg'),
    new Meals('m14','c2','Mutton Pulao',900,'https://image.shutterstock.com/image-photo/mutton-pulao-on-wooden-table-600w-780144226.jpg'),

    new Meals('m15','c3','Broast',200,'https://image.shutterstock.com/image-photo/chicken-broasted-sauce-salad-french-600w-1493628677.jpg'),
    new Meals('m16','c3','Cheese Burger',150,'https://image.shutterstock.com/image-photo/burger-beef-tomatoes-fresh-lettuce-600w-1726357411.jpg'),
    new Meals('m17','c3','Chicken Sandwich',250,'https://image.shutterstock.com/image-photo/club-sandwich-on-wooden-board-600w-1146031718.jpg'),
    new Meals('m18','c3','Beef Burger',180,'https://image.shutterstock.com/image-photo/fast-food-burger-chicken-meat-600w-1376206334.jpg'),
    new Meals('m19','c3','Fried Wings',200,'https://image.shutterstock.com/image-photo/barbecue-chicken-wings-close-on-600w-374862373.jpg'),
    new Meals('m20','c3','French Fries',100,'https://image.shutterstock.com/image-photo/tasty-french-fries-on-cutting-600w-273398612.jpg'),
    new Meals('m21','c3','Mayo Garlic Fries',150,'https://image.shutterstock.com/image-photo/potato-french-fries-garlic-mayo-600w-606752492.jpg'),

    new Meals('m22','c5','Pan Fry Teriyaki Chicken',200,'https://image.shutterstock.com/image-photo/teriyaki-chicken-broccoli-cast-iron-600w-1234124962.jpg'),
    new Meals('m23','c5','Singapore Rice Noodles',200,'https://image.shutterstock.com/image-photo/healthy-vegetarian-vegan-menu-delicious-260nw-1189101451.jpg'),
    new Meals('m24','c5','Dal Makhani',200,'https://image.shutterstock.com/image-photo/hyderabadi-khatti-dal-famous-lentil-260nw-645812626.jpg'),
    new Meals('m25','c5','Lamb Biryani',300,'https://image.shutterstock.com/image-photo/delicious-homemade-mutton-lamb-dum-260nw-599449892.jpg'),
    new Meals('m26','c5','Shish Kebabs',300,'https://image.shutterstock.com/image-photo/fresh-homecooked-on-grill-fire-600w-1095342890.jpg'),
    new Meals('m27','c5','Roasted Ducks with Apples',800,'https://image.shutterstock.com/image-photo/festive-christmas-duck-baked-apples-600w-316387985.jpg'),
    new Meals('m28','c5','Frikkadels (South African meat balls)',200,'https://image.shutterstock.com/image-photo/spicy-bifteki-frikadelle-frikkadel-meatballs-260nw-1303662553.jpg'),

]