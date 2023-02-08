//https://firebase.google.com/docs/firestore
import {app} from './configFirebase'


import { collection, addDoc, getFirestore, serverTimestamp } from "firebase/firestore"

const db= getFirestore(app)

async function addSuggestion(text){
    await addDoc(collection(db,"suggestions"),{
        text:text,
        date: serverTimestamp()

    })

}

export{addSuggestion}
