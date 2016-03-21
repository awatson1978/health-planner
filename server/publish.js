// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  try {
    return Lists.find();
  } catch (error) {
    console.log(error);
  }
});



// TODO:  create personalTasks publish/subscribe functions
//Meteor.publish('personalTasks', function (ownerId) {
//    return Todos.find({owner_id: ownerId});
//});


// Publish all items for requested list_id.
// TODO:  Meteor.publish('todos', function (ownerId, completed, starred) {

Meteor.publish('todos', function (ownerId, completedStatus, starred) {
  //Meteor.publish('todos', function (list_id) {

  // TODO:  add if/then to detect admin account (1st)
  // TODO:  generalize if/then detection to detect admin role (2nd)

  // TODO:  only return tasks owned by currently logged in user
  // TODO;  unless admin, in which case, return all tasks

  //TODO:  if starred = true, only return tasks marked star
  //TODO:  if completed = true, only return completed tasks
  //TODO:  if completed = false, only return uncompleted tasks
  //TODO:  if completed = null, return all tasks

  return Todos.find({
    owner: ownerId
  });
});
Meteor.publish('allTodos', function (list_id) {
  return Todos.find();
});
Meteor.publish('categoryIcons', function () {
  return CategoryIcons.find();
});



//--------------------------------------------------
// USERS



// Publish users directory and user profile
Meteor.publish("usersDirectory", function () {
  return Meteor.users.find();
});
Meteor.publish('userProfile', function (userId) {
  return Meteor.users.find({
    _id: this.userId
  });
});

Meteor.publish("facebook_avatar_url", function () {
  return Meteor.users.find({
    _id: this.userId
  });
});
