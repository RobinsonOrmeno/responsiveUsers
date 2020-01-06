const getNombre = (idPost) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
           .then(res =>{ 
               return res.json()
        })
        .then(post =>{
            
            console.log(post.id);
            fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
                .then(res =>{
                    return res.json()
                })
                    .then(user =>{
                        $('#nombre').text(user.name)
                        console.log(user.name)
                    })
        })
}



//getNombre(6);




const getNombreAsync = async(idPost)=>{
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)

        const post = await resPost.json()
   //     console.log(post)
        const resUser = await  fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
        const user = await resUser.json()
       // console.log(user)
    
        return user
    
    } catch (error) {
        console.log(error)

        alert(error, "", "error")

    }

   
}

//getNombreAsync(18)


const firstAsync = async()=>{
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    return result
 
    }
    