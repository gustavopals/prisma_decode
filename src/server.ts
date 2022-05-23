import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
	res.send('Hello World!')
  })

app.listen(4003, () => console.log("Server is running on PORT 4003"));
