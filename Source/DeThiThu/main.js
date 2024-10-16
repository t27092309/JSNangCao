// get: danh sách, object
// post: thêm mới
// put: cập nhật
// delete: xóa

import { getAllProduct, deleteProduct, addProduct, getProductById, updateProduct } from "./services.js";

const app = {
	// key - value
	// hiển thị giao diện danh sách
	renderProductList: async function () {
		// 1. Lấy dữ liệu từ db.json (user)
		const data = await getAllProduct();
		// 2. duyệt mảng data và đổ dữ liệu ra

		// 2.1. duyệt mảng và đổ vào tr
		const proList = data?.map((item, index) => {
			return `
				<tr>
           		 	<th scope="row">${index + 1}</th>
          			<td>${item.name}</td>
          			<td>${item.quantity}</td>
          			<td style="max-width: 100px;"><img style="max-width: 100px;" src="${item.image}" alt=""></td>
          			<td>
						<button data-id ="${item.id}" class="btn_edit btn btn-warning">Edit</button>
						<button data-id ="${item.id}" class="btn_delete btn btn-danger">Delete</button>
					</td>
				</tr>
            `
		}).join(''); // chuyển 1 mảng về 1 chuỗi
		const tbodyElement = document.querySelector('tbody');
		tbodyElement.innerHTML = proList;

		this.handleDelete();
		this.handleEditProduct();
	},
	handleDelete: function () {
		const btnDelete = document.querySelectorAll('.btn_delete');
		btnDelete.forEach((item) => {
			item.addEventListener('click', () => {
				const id = item.getAttribute("data-id");
				if (window.confirm("Delete???")) {
					deleteProduct(id)
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
					<label for="name" class="form-label">Tên sản phẩm</label>
					<input type="text" class="form-control" id="name">
				</div>

				<div class="mb-3">
					<label for="quantity" class="form-label">Số lượng sản phẩm</label>
					<input type="text" class="form-control" id="quantity">
				</div>

				<div class="mb-3">
					<label for="img" class="form-label">Hình ảnh</label>
					<input type="text" class="form-control" id="img">
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
		const inputQuantity = document.getElementById('quantity');
		const inputImg = document.getElementById('img');

		if (!inputName.value.trim()) {
			alert("Cần nhập tên sản phẩm");
			inputName.focus();
			return;
		}
		if (!inputQuantity.value.trim()) {
			alert("Cần nhập thông tin số lượng sản phẩm");
			inputQuantity.focus();
			return;
		}
		if (!inputImg.value.trim()) {
			alert("Cần nhập thông tin hình ảnh sản phẩm");
			inputImg.focus();
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
			item.addEventListener('click', async () => {
				const id = item.dataset.id;
				const product = await getProductById(id);
				const content = document.getElementById('content');

				content.innerHTML = `
					<form action="" id="form">
					<div class="mb-3">
						<label for="name" class="form-label">Tên sản phẩm</label>
						<input type="text" class="form-control" id="name" value="${product.name}">
					</div>

					<div class="mb-3">
						<label for="quantity" class="form-label">Số lượng sản phẩm</label>
						<input type="text" class="form-control" id="quantity" value="${product.quantity}">
					</div>

					<div class="mb-3">
						<label for="img" class="form-label">Hình ảnh</label>
						<input type="text" class="form-control" id="img" value="${product.img}">
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
	handleUpdateProduct: async function(id){
		const inputName = document.getElementById('name')
		const inputQuantity = document.getElementById('quantity')
		const inputImg = document.getElementById("img")

		if (!inputName.value.trim()) {
			alert("Cần nhập tên sản phẩm");
			inputName.focus();
			return;
		}
		if (!inputQuantity.value.trim()) {
			alert("Cần nhập thông tin số lượng sản phẩm");
			inputQuantity.focus();
			return;
		}
		if (!inputImg.value.trim()) {
			alert("Cần nhập thông tin hình ảnh sản phẩm");
			inputImg.focus();
			return;
		}

		const data = {
			name: inputName.value,
			quantity: Number(inputQuantity.value),
			image: inputImg.value
		}
		await updateProduct(id,data);
		alert("Update successfully");
	},
start: function(){
	this.renderProductList();
	this.renderAddProduct();
}

}
app.start();