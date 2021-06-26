db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        $and: [{ tipo: "sódio" }, { percentual: { $gte: 40 } }],
      },
    },
  },
  { $push: { tags: { $each: ["muito sódio"] } } },
  { upsert: true },
);

db.produtos.find(
  {},
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);
