// Import express
import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Import cors
import cors from "cors";
// Import router
import Router from "./routes/route.js";
import DB from "./config/database.js";

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

// Testing database connection
try {
    await DB.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// use router
app.use(Router);

// listen on port
app.listen({ port: process.env.PORT }, async () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
});
// app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`));
