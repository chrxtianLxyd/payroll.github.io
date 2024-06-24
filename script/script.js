// import { createClient } from '/@supabase/supabase-js'

// const supabaseUrl = 'https://iznwmbeoxqvchvkmczly.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

//////////////////////////

// for log in
let unameLog = document.querySelector("#unameLog")
let pwordLog = document.querySelector("#pwordLog")
let form2 = document.querySelector("#logForm")


//// log in validation
form2.addEventListener('login', (e) => {
    if(unameLog.value !== unameArray || unameLog.value !== emailArray){
        console.log("user does not exist")
        e.preventDefault()
    }
})

console.log(unameArray)
