import { getAllProduct, deleteProduct, addProduct, getProductById, updateProduct } from "./services.js";

const app = {
    renderProductList: async function () {
        const data = await getAllProduct()
        // console.log(data);

        const productList = data?.map((item, index) => {
            return `
            	<tr>
           		 	<th scope="row">${index + 1}</th>
          			<td>${item.name}</td>
                    <td style="max-width: 100px;"><img style="max-width: 100px;" src="${item.logo}" alt=""></td>
          			<td>${item.count}</td>
          			<td>
						<button data-id ="${item.id}" class="btn_edit btn btn-warning">Edit</button>
						<button data-id ="${item.id}" class="btn_delete btn btn-danger">Delete</button>
					</td>
				</tr>
            `
        }).join("")
        // console.log(productList);
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = productList;

        this.handleDelete();
        // this.handleEditProduct();
    },
    handleDelete: function () {
        const btnDelete = document.querySelectorAll('.btn_delete');
        // console.log(btnDelete);
        btnDelete.forEach((item) => {
            item.addEventListener('click', () => {
                // console.log(item)
                const id = item.getAttribute("data-id");
                if (window.confirm("Delete?")) {
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
                    <h1> Thêm mới sản phẩm</h1>
                    <form id="form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Tên sản phẩm</label>
                            <input type="text" class="form-control" id="name">
                        </div>
    
                        <div class="mb-3">
                            <label for="logo" class="form-label">Hình ảnh</label>
                            <input type="text" class="form-control" id="logo">
                        </div>
                        
                        <div class="mb-3">
                            <label for="count" class="form-label">Số lượng sản phẩm</label>
                            <input type="number" class="form-control" id="count">
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
        const inputName = document.getElementById('name');
        const inputLogo = document.getElementById('logo');
        const inputCount = document.getElementById('count');

        const data = {
            name: inputName.value,
            logo: inputLogo.value,
            count: Number(inputCount.value)
        }
        // console.log(data);
        await addProduct(data);
        alert("Add successfully")
    },
    handleEditProduct: function () {
        const btnEdit = document.querySelectorAll('.btn_edit');
        btnEdit.forEach((item) => {
            item.addEventListener('click', async () => {
                console.log(item);
                const id = item.dataset.id;
                const product = await getProductById(id);
                const content = document.getElementById('content');
                content.innerHTML = `
                <h1> Sửa sản phẩm</h1>
                <form id="form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name" value="${product.name}">
                    </div>

                    <div class="mb-3">
                        <label for="logo" class="form-label">Hình ảnh</label>
                        <input type="text" class="form-control" id="logo" value="${product.logo}">
                    </div>
                    
                    <div class="mb-3">
                        <label for="count" class="form-label">Số lượng sản phẩm</label>
                        <input type="number" class="form-control" id="count" value="${product.count}">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
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
        const inputName = document.getElementById('name');
        const inputLogo = document.getElementById('logo');
        const inputCount = document.getElementById('count');

        const data = {
            name: inputName.value,
            logo: inputLogo.value,
            count: Number(inputCount.value)
        }
        await updateProduct(id, data);
        alert("Update successfully")
    },
    start: function () {
        this.renderProductList();
        this.renderAddProduct();
    }
}
app.start();



