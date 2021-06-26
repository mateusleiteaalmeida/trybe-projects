db.resumoVoos.insertMany([
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos
      .find({
        natureza: "Doméstica",
        "empresa.nome": "LATAM AIRLINES BRASIL",
      })
      .count(),
  },
]);

db.resumoVoos
  .find(
    {
      empresa: "LATAM AIRLINES BRASIL",
    },
    {
      empresa: 1,
      totalVoosDomesticos: 1,
      _id: 0,
    },
  )
  .limit(1);
