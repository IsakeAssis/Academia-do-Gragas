const { modelName } = require("../models/Person");
const Person = require("../models/Person");
const router = require("express").Router();

// Rotas
router.post("/", async (req, res) => {
  const { name, date, payment } = req.body;

  if (!name) {
    return res.status(422).json({ error: "Nome é obrigatório" });
  }

  const person = {
    name,
    date,
    payment,
  };

  try {
    await Person.create(person);
    res.status(201).json({ message: "Pessoa inserida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Correção aqui
  }
});

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Correção aqui
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ message: "usuario não encontrado" });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Correção aqui
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, date, payment } = req.body;

  const person = {
    name,
    date,
    payment,
  };
  //
  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);
    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ message: "usuario não encontrado" });
      return;
    }
    if (payment === true) {
      res.status(200).json(person);
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Correção aqui
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });
  if (!person) {
    res.status(422).json({ message: "usuario não encontrado" });
    return;
  }

  try {
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: "Usuario removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Correção aqui
  }
});

module.exports = router;
