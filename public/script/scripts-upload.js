
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

input.addEventListener('change', (e) => {
    console.log('e of inout:', e.target.files)
})

function processSelectedFiles(fileInput) {
  let files = fileInput.files[0];
  console.log('files:', files)
  return files
}
module.exports = processSelectedFiles