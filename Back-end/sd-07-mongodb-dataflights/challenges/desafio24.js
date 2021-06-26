db.voos.findOne(
  {
    litrosCombustivel: { $lte: 600, $exists: true },
    $or: [
      { "empresa.nome": { $ne: "GOL" } },
      { "empresa.nome": { $ne: "AZUL" } },
    ],
  },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
);
