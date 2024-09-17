const db = require('../Views/viewsdb');

//specific route for users
const getUsers = async(req, res) => {
    try{
        // const coun = 'SELECT * FROM users '; 
        const coun = 'SELECT shops.name as shopname,  users.name, users.email, users.role, users.number, users.approved as status FROM users JOIN shops ON shops.ownerID = users.id';
        const[rows]= await db.query(coun);

        res.json(rows);
    }
catch(err){res.json(err.message)}
};

const getUserById = async(req, res)=>{
    try{
        const userId = req.params.Id;
        const exec = 'SELECT * FROM users WHERE id = ?'; //name email number approved and join with shops table
        const[rows] = await db.query(exec, [userId]);
        res.json(rows);
    }
catch(err){res.json(err.message)}
};

const getUserByCountry = async(req, res) => {
    try{
        const country = req.params.Id;
        const query = 'SELECT * FROM shops WHERE country = ?'; //reverse join to get the name of the person who created the shop
        const[rows] = await db.query(query, [country]);
        res.json(rows); //make it for shops

    }
catch(err){res.json(err.message)}
};

const getShopsByType = async(req, res) => {
    try{
        const shops = req.params.name;
        const getname = 'SELECT shops.* , shoptypes.name as shopType FROM shops JOIN shoptypes ON shops.typeid = shoptypes.id';
        const[data] = await db.query(getname, [shops]);
        res.json(data);
    }
catch(err){res.json(err.message)}
};

// const getShops = async(req, res) => {
//     try{
//         const shops = req.params.Id;
//         const shop = 'SELECT * FROM SHOPS LIKE ?';
//         const[data] = await db.query(shop, [shops]);
//         res.json(data);
//     }
// catch(err){res.json(err.message)}
// };

module.exports = {
getUsers,
getUserById,
getUserByCountry,
getShopsByType,
// getShops,

};
//search shops and users use LIKE where name like ?
//fetch users based on country 
//fetch a single user by id (users where id is)

//fetching shops by version = Free Trial using the field version (where) 
// shops by type use join table shoptypes typeID in shops table