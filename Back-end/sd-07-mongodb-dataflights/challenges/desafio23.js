db.voos.findOne(
  { litrosCombustivel: { $lte: 1000, $exists: true } },
  { litrosCombustivel: 1, vooId: 1, _id: 0 },
);
