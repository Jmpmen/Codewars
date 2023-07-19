// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

function createRoom(name, description) {
    return { name: name, description: description, completed: false };
  }
  
  const rooms = {
    room1: createRoom("Room 1", "You find yourself in a dimly lit room with a locked door."),
    room2: createRoom("Room 2", "This room is filled with mysterious symbols on the walls."),
    room3: createRoom("Room 3", "You enter a room with a large, ornate mirror."),
};