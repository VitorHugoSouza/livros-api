const { Livro } = require("../models");

exports.listAll = async (req, res) => {

  const livros = await Livro.findAll({
    order: [["name", "ASC"]],
  });
  res.json(livros);
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  const livro = await Livro.findOne({
    where: {
      id,
    },
  });

  if (!!livro) {
    res.json(livro);
  } else {
    res.status(404).json({ error: "Livro não encontrado" });
  }
};

exports.create = async (req, res) => {
  const novoLivro = await Livro.create(req.body);
  res.json(novoLivro);
};

exports.update = async (req, res) => {
  const { id } = req.params;

  const updLivro = await Livro.update(req.body, {
    where: {
      id,
    },
  });

  res.json({ success: !!updLivro });
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  const updLivro = await Livro.destroy({
    where: {
      id,
    },
  });

  res.json({ success: !!updLivro });
};
