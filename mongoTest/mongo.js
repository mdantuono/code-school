db.monsters

db.monsters.insert({"name":"monstername","health":100,"last fought":new Date(2018, 0, 01), "attacks":["attack 1","attack 2"], "stats":{"attack":10,"defense":10}}) //adds a new monster to a document

db.monsters.find() //will console log all the documents in collection

db.monsters.find("name":"monstername") //to find a monster by name

db.monsters.find("attacks":["attack 1"]) //to find a monster by an attack

db.monsters.find({"defense":10}) //to find a monster by the defense stat