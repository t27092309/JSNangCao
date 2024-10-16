// get: lấy danh sách, bản ghi
// post: thêm mới
// put: sửa 
// delete: xóa

export const getAllProduct = async ()=>{
    try{
        const res = await fetch(`http://localhost:3000/products`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        return data
    }catch(error){
        alert("Error")
    }
}

export const deleteProduct = async(id)=>{
    try{
        await fetch(`http://localhost:3000/product/${id}`,{
            method: "delete"
        })
        alert("Delete successfully")
    }catch(error){
        alert("Delete failed")
    }
}

export const addProduct = async(data)=>{
    try{
        await fetch(`http://localhost:3000/product`,{
            method: "post",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        alert("Error")
    }
}

export const getProductById = async(id)=>{
    try{
        const res = await fetch(`http://localhost:3000/product/${id}`)
        const data = await res.json();

        return data;
    }catch(error){
        alert("Error")
    }
}

export const updateProduct = async (id,data)=>{
    try{
        await fetch(`http://localhost:3000/product/${id}`,{
            method: "put",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        alert("Error")
    }
}