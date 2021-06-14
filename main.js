const paths = document.querySelectorAll('.logo path')


for (let i=0; i< paths.length; i++) {
    console.log(`${i} length is `, paths[i].getTotalLength())
}