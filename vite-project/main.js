import { addSuggestion } from './src/suggestionsFirebase'
import './style.css'

document.querySelector('.form').addEventListener('submit',addsubggestion)

function addsubggestion(event){
event.preventDefault()
const text = document.querySelector('#text').value
addSuggestion(text)
}

