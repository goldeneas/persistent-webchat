import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { writable, Writable } from "svelte/store";
import { db } from "./database";

let messages: Writable<message[]> = writable([]);

// create a new firestore query for the messages and order them based on timestamp
const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
// listen for every change in the messages collection from firestore
onSnapshot(q, (querySnapshot) => {
    // clear last saved messages store
    messages.update((list) => []);
    // get each document (including the modified ones)
    querySnapshot.forEach((doc) => {
        // create a new messages array
        // we use ...list to keep track of the documents we added in the last iteration of this forEach
        // we use { ... } to add a new message object to the list using data from this forEach iteration's document
        // no return value is required: the list we're creating is automatically assigned to the list parameter
        messages.update((list) => 
            [...list,
            {
                text: doc.data()["text"],
                username: doc.data()["username"],
                timestamp: doc.data()["timestamp"]
            }
            ]
        )
    });
});

export { messages }