// Configuration

class Config { 
    public port = 3001; 
    // mysql database
    public mySQLhost = "eu-cdbr-west-03.cleardb.net";
    public mySQLUser = "bfc584f0ddae85";
    public mySQLPassword = "c1b3e516";
    public mySQLdb = "heroku_9580274f3f074b6";
}

const config = new Config();
export default config



// public mySQLhost = "localhost";
// public mySQLUser = "root";
// public mySQLPassword = "12345678";
// public mySQLdb = "vication";