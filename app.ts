import express from "express";
import {PrismaClient} from "@prisma/client";
import cors from "cors";

const app = express();
const port = 3005;
const prisma = new PrismaClient();

const print = (ed: any) => {
	const br = "::::::::::::::::::::";
	console.log(`${br}\n`, ed, `\n${br}`);
};

// consomme les données json envoyé
app.use(express.json());
app.use(cors());

// implémentation basique d'express
app.get("/", (req, res) => {
	res.send("Hello from Express");
});

/////////////////////////////////////////////////////////////////////
/////////////////// implémentation de Prisma ////////////////////////
/////////////////////////// category ////////////////////////////////
// exemple méthode "get" (Read) de données dans la DB
app.get("/category", async (req, res) => {
	const category = await prisma.category.findMany();
	res.json(category);
});
app.get("/category/:id/:todo?", async (req, res) => {
	const {id, todo} = req.params;

	if (todo === "todo") {
		const todo = await prisma.todo.findMany({
			where: {categoryId: +id},
		});
		res.json(todo);
	} else {
		const category = await prisma.category.findUnique({
			where: {id: +id},
		});
		res.json(category);
	}
});

// exemple méthode "post" (Create) de données dans la DB
app.post("/category", async (req, res) => {
	const {name} = req.body;

	try {
		const category = await prisma.category.create({
			data: {
				name,
			},
		});
		res.json(category);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

// exemple méthode "put" (Update) de données dans la DB
app.put("/category/:id", async (req, res) => {
	const {id} = req.params;
	const {name} = req.body;

	try {
		const category = await prisma.category.update({
			where: {id: +id},
			data: {
				name,
			},
		});
		res.json(category);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

// exemple méthode "delete" (Delete) de données dans la DB
app.delete("/category/:id", async (req, res) => {
	const {id} = req.params;

	try {
		const category = await prisma.category.delete({
			where: {id: +id},
		});
		res.json(category);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

/////////////////////////////////////////////////////////////////////
///////////////////////////// todo //////////////////////////////////
app.get("/todo/:id?", async (req, res) => {
	const {id} = req.params;

	if (id && !isNaN(+id)) {
		const todo = await prisma.todo.findUnique({
			where: {id: +id},
		});
		res.json(todo);
	} else {
		const todo = await prisma.todo.findMany();
		res.json(todo);
	}
});

app.post("/todo", async (req, res) => {
	const {categoryId, task} = req.body;

	try {
		const todo = await prisma.todo.create({
			data: {
				categoryId,
				task,
			},
		});
		res.json(todo);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

app.put("/todo/:id", async (req, res) => {
	const {id} = req.params;
	const {categoryId, task, isDone} = req.body;

	try {
		const todo = await prisma.todo.update({
			where: {id: +id},
			data: {
				categoryId,
				task,
				isDone,
			},
		});
		res.json(todo);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

app.delete("/todo/:id", async (req, res) => {
	const {id} = req.params;

	try {
		const todo = await prisma.todo.delete({
			where: {id: +id},
		});
		res.json(todo);
	} catch (error) {
		print(error);
		res.send(error);
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
