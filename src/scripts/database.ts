import { app } from "./firebaseapp";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);

async function storeMessage(username: string, text: string) {
    const today = new Date()

	try {
  		const docRef = await addDoc(collection(db, "messages"), {
  		  username: username,
		  text: text,
		  timestamp: today.getHours() + ":" + today.getMinutes()
  		});
	  console.log("Document written with ID: ", docRef.id);
	} catch (e) {
	  console.error("Error adding document: ", e);
	}
}

async function getMessages(): Promise<message[]> {
	let messages: message[] = [];

	await getDocs(collection(db, "messages"))
	.then((docs) => {
		docs.forEach((doc) => (
			messages.push({
				text: doc.data()["text"],
				username: doc.data()["username"],
				timestamp: doc.data()["timestamp"]
			}),

			console.log("Got document with id:", doc.id)
		));
	});

	return messages;
}

export { db, storeMessage, getMessages }