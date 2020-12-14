# Zadanie Inputs

// Stwórz komponent funkcyjny TextInput
// korzystając z hooksów useState i useEffect

// TextInput ma działać w identyczny sposób jak tag <input type="text">
// TextInput ma przyjmować te same propsy <input> co z małą modyfikacją
// onChange z aktualną wartością TextInputa jest wywoływane co czwartą zmianę długości stringa w propie value

const TextInput = ()=>{}


// Stwórz komponent funkcyjny TextArea
// korzystając z hooksów useState i useEffect

// Komponent ma działać w identyczny sposób jak tag <textarea>
// TextArea ma przyjmować te same propsy <textarea> co z małą modyfikacją
// onChange z aktualną wartością TextArea jest wywoływane z aktualnym value co wciśnięcie entera lub co onBlur
const TextArea = ()=>{}


// Stwórz komponent funkcyjny MultipleChoice
// korzystając z hooksów useState i useEffect

// Komponent ma renderować tyle checkboxów i labeli ile stringów jest w propsie items
// Na kliknięciu w dowolny checkbox ma się on aktywować lub deaktywować 
// jednocześnie wywołując propsa onChange z aktywnymi elementami z propsa items
// checkbox aktywuje się poprzez kliknięcie w input jak i w label tego inputa
// checkboxy i labele układają się inline wyrównane centralnie
const MultipleChoice = ({items, onChange})=>{}