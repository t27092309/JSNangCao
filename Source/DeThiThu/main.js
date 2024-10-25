import { getAllProduct, getProductById, deleteProduct, addProduct, updateProduct } from "./services.js";
const app = {

    renderProductList: async function () {
        const data = await getAllProduct();
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


    },
    handleDelete: function () {
        const btnDelete = document.querySelectorAll('.btn_delete');
        btnDelete.forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.getAttribute("data-id");
                if (window.confirm('Delete??')) {
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
        const inpName = document.getElementById('name')
        const inpQuantity = document.getElementById('qunatity')
        const inpImg = document.getElementById('image')

        const data = {
            name: inpName.value,
            quantity: Number(inpQuantity.value),
            image: inpImg.value
        }
        await addProduct(data);
        alert("Add successfully")
    },

    handleEditProduct: function () {
        const btnEdit = document.querySelectorAll('.btn_edit');
        btnEdit.forEach((item) => {
            item.addEventListener('click', async () => {
                const id = item.dataset.id;
                const product = await getProductById(id);

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
                    this.handleUpdateProduct();
                })
            })
        })
    },

    handleUpdateProduct: async function(id){
        const inpName = document.getElementById('name')
        const inpQuantity = document.getElementById('qunatity')
        const inpImg = document.getElementById('image')

        const data = {
            name: inpName.value,
            quantity: Number(inpQuantity.value),
            image: inpImg.value
        }
        await updateProduct(data);
        alert("Add successfully")
    }
    // start: function(){
    //     this.renderProductList();
    //     this.renderAddProduct();

    // }
}
app.start();