import { db } from './firebase'

// the user is created as an object with the username and email properties.Furthermore, 
// it is stored on the users / ${ id } resource path.
// So whenever you would want to retrieve a specific user from the Firebase database, 
// you could get the one user via its unique identifier and the entity resource path.
 const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });

// users are retrieved from the general user’s entity resource path.
// The function will return all users from the Firebase realtime database.
 const onceGetUsers = () =>
    db.ref('users').once('value');

 const doCreateExpense = (uid, expense , category , comments) => {
     db.ref(`expenses/`).push().set({
         uid, expense, category, comments 
     })
 }

export { doCreateUser, onceGetUsers, doCreateExpense}