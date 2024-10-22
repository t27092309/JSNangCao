export const getAllProduct = async()=>{
    try{
        const res = await fetch(`http://localhost:3000/products`);
        const data = await res.json();
        return data;
    }catch(error){
        alert("Error")
    }
}

export const getProductById = async(id)=>{
    try{
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        return data;
    }catch(error){
        alert("Get Product Error")
    }
}

export const deleteProduct = async(id)=>{
    try{
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "delete"
        })
        alert("Delete successfully")
    }catch(error){
        alert("Delete failed")
    }
}

export const addProduct = async(data)=>{
    try{
        await fetch(`http://localhost:3000/products`,{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        alert("Add failed")
    }
}

export const updateProduct = async(id,data)=>{
    try{
        await fetch(`http://localhost:3000/products/${id}`,{
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        alert("Update failed")
    }
}