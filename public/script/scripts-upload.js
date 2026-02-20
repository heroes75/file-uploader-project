// import { supabase } from "../../utlis/supabase"

const form = document.getElementById('form')
const submit = document.getElementById('submit-file')
console.log('submit:', submit)
const input = document.getElementById('input')
console.log('input:', input.target)


form.addEventListener('submit', (e) => {
    console.log('e of form:', e)
})

submit.addEventListener('click', (e) => {
    console.log('e of button:', e.target)
})

input.addEventListener('change', function (e) {
console.log(this.files)
    console.log('e of inout:', e.files)
})


// async function processSelectedFiles(fileInput) {
//   let files = fileInput.files[0];
//   const {data, error} = await supabase.storage.from('folderOfFolder').upload('home/1234.png', files)
//   if (!error) {
//     console.log(data)
//   }
//   console.log('files:', files)
//   return files
// }
// module.exports = processSelectedFiles