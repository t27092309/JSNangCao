// get: lấy danh sách, bản ghi
// post: thêm mới
<<<<<<< HEAD
// put: sửa
// delete: xóa

export const getAllProduct =async ()=>{
    try {
        const res = await fetch(`http://localhost:3000/products`);// mặc định = get
=======
// put: sửa 
// delete: xóa

export const getAllProduct = async ()=>{
    try{
        const res = await fetch(`http://localhost:3000/products`);
>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        return data
<<<<<<< HEAD
    } catch (error) {
        alert("Lỗi")
    }
}

export const deleteProduct = async (id)=>{
    try {
        await fetch(`http://localhost:3000/products/${id}`,{
            method:"delete"
        })
        alert("Xóa thành công")

    } catch (error) {
        alert("Xóa thất bại")
    }
}

export const addProduct = async (data)=>{
    try{
        await fetch(`http://localhost:3000/products`,{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)// chuyển dữ liệu từ object -> JSON
        })

    }catch(err){
        alert("Lỗi")
    }
}

export const getProductById =async(id)=>{
    try {
        const res  = await fetch(`http://localhost:3000/products/${id}`)
        const data = await res.json();

        return data;
    } catch (error) {
        alert("Lỗi")
    }

=======
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
>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
}

export const updateProduct = async (id,data)=>{
    try{
<<<<<<< HEAD
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "put", // cập nhật
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)// chuyển dữ liệu từ object -> JSON
        })

    }catch(err){
        alert("Lỗi")
=======
        await fetch(`http://localhost:3000/product/${id}`,{
            method: "put",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        alert("Error")
>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
    }
}