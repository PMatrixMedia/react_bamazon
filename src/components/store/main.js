import react from 'react';
import mysql2 from 'mysql2';



const config =
    {
        host: 'mysql52int.cp.charter-business.net',
        user: 'u2111908_bamazon',
        password: 'C0hort2018',
        database: 'db2111908_bamazon',
        port: 3306,
        ssl: true
    };

const conn = new mysql.createConnection(config);





export default class store extends React.Component {


}