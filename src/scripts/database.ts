import { app } from "./firebaseapp";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);

async function storeMessage(username: string, text: string) {
    const today = new Date();
	// create timestamp
	// (today.getMinutes()<10?'0':'') is used to add a 0 in front of single digit minutes
	// for example:
	// 23:05 in realtime would've returned -> 23:5 without a 0 in front of the five
	const timestamp = (today.getHours()<10?'0':'') + today.getHours()
						+ ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()
						+ ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();

	try {
  		const docRef = await addDoc(collection(db, "messages"), {
  		  username: username,
		  text: text,
		  timestamp: timestamp
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