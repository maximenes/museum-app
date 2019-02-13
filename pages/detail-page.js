function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    console.log(name)

    const textArea = document.getElementById ('msg')
    const msg = textArea.value
    console.log(msg)

    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    console.log(h3)

    h3.innerHTML = `${name} said:`
    p.innerHTML = msg

    comment.classList.add('comment')
    comment.appenChild.add('h3')
    comment.appenChild.add('p')
    
    console.log(comment)

  }