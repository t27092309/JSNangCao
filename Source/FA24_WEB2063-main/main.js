import { getAllProduct, getProductById, deleteProduct, addProduct, updateProduct } from "./services.js";
const app = {
    renderProductList: async function () {
        const data = await getAllProduct();
        // console.log(data);
        const proList = data?.map((item, index) => {
            return `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><image src="${item.image}" style="width: 100px;" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn_edit btn btn-warning">Edit</button>
                        <button data-id="${item.id}" class="btn_delete btn btn-danger">Delete</button></td>
                </tr>
            `
        }).join("");
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = proList;
        this.handleDelete();
        this.handleEditProduct();
    },
    handleDelete: function () {
        const btnDelete = document.querySelectorAll('.btn_delete');
        btnDelete.forEach((item) => {
            // console.log(btnDelete)
            item.addEventListener('click', () => {
                const id = item.getAttribute("data-id");
                if (window.confirm("Delete???")) {
                    deleteProduct(id);
                }
            })
        })
    },
    renderAddProduct: function () {
        const btnAdd = document.getElementById('btn_add');
        btnAdd.addEventListener('click', () => {
            const content = document.getElementById('content');
            content.innerHTML = `
                    <form action="" id="form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity">
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="text" class="form-control" id="image">
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            `
            const form = document.getElementById('form');
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleAddProduct();
            })
        })
    },
    handleAddProduct: async function () {
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImg = document.getElementById('image')

        if (!inputName.value.trim()) {
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus(); // focus vào ô input đang bị lỗi
            return; // ngăn chặn thực thi các tác vụ tiếp theo
        }

        if (!inputQuantity.value.trim()) {
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        if (!inputImage.value.trim()) {
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImg.value
        }

        await addProduct(data);
        alert("Add successfully");
    },

    handleEditProduct: function () {
        const btnEdit = document.querySelectorAll('.btn_edit');
        btnEdit.forEach((item) => {
            // console.log(btnEdit)
            item.addEventListener('click', async () => {
                // console.log(item)
                const id = item.dataset.id;
                const product = await getProductById(id);
                // console.log(product);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <form action="" id="form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" value="${product.name}">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity" value="${product.quantity}">
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input type="text" class="form-control" id="image" value="${product.image}">
                        </div>

                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                `
                const form = document.getElementById('form');
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    this.handleUpdateProduct(id);
                })
            })
        })
    },
    handleUpdateProduct: async function (id) {
        const inputName = document.getElementById('name')
        const inputQuantity = document.getElementById('quantity')
        const inputImg = document.getElementById('image')

        if(!inputName.value.trim()){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus(); // focus vào ô input đang bị lỗi
            return; // ngăn chặn thực thi các tác vụ tiếp theo
        }

        if(!inputQuantity.value.trim()){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        if(!inputImage.value.trim()){
            alert("Cần nhập thông tin hình ảnh sản phẩm");
            inputImage.focus(); // focus vào ô input đang bị lỗi
            return;
        }

        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImg.value
        }
        // console.log(data)

        await updateProduct(id, data);
        alert("Update successfully");
    },
    start: function () {
        this.renderProductList();
        this.renderAddProduct();
    }
}
app.start();