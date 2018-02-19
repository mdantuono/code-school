var mongo = function(db) {
  //Find all monsters with an attack lower than 10
  mongo.monsters.find({"attack": {"$lt": 10}});
  //Find all monsters with a level above 5 but below 15 inclusive
  mongo.monsters.find({"Level": {"$gte": 5, "$lte": 15}});
  //Find all monsters that do not have the "bite" attack
  mongo.monsters.find({"attack": {"$ne": "bite"}});
  //Find all monsters with levels less than 6 but only return the name, level, and health attributes
  mongo.monsters.find(
      {"Level": {"$lt": 6}},
      {"name": true, "Level": true, "health": true}
  );
  //Find all monsters whos attack is between 10 and 20 but do not include the monsters health or style
  mongo.monsters.find(
      {"attack": {"$gte":10, "$lte": 20}},
      {"health": false, "style": false}
  );
  //Find out how many monsters are in the collection
  mongo.monsters.find().count();
  //Sort the collection by the monsters level with the highest level at the top and lowest at the bottom
  mongo.monsters.find().sort({"level": -1});
};