import { app } from "./firebase";
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

async function getMessages() {
	return getDocs(collection(db, "messages"));
}

export { storeMessage, getMessages }