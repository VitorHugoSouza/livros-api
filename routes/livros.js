const livros = require("../controllers/livros");

module.exports = function (app) {
  app.get("/livros", livros.listAll);
  app.get("/livros/:id", livros.findOne);
  app.post("/livros", livros.create);
  app.put("/livros/:id", livros.update);
  app.delete("/livros/:id", livros.destroy);
};
