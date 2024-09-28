// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (Đồng bộ)

console.log(1);
console.log(2);
console.log(3);
// 1 2 3

// call api, setTimeout, setInterval, load, click,... JS xử lí bất đồng bộ

setTimeout(() => {
    console.log(2);
}, 3000); // chờ 3s -> ()=>{}

console.log(3);

// Lý thuyết: 1 -> chờ 3s in ra 2 -> 3
// Thực tế: 1 -> 3 -> chờ 3s in ra 2

// callstack: xử lí các tác vụ ĐỒNG BỘ
// webapi: xử lí các tác vụ BẤT ĐỒNG BỘ
// JS ưu tiên thực thi(kết quả) của callstack(đồng bộ)
// Sau khi thực thi hết tất cả các tác vụ của callstack -> webapi(bất đồng bộ)

// tại sao cần xủ lý bất đồng bộ
// 1: bất đồng bộ
// 2: đồng bộ
// nếu 1 2 không ảnh hưởng(kết quả của việc 1 không liên quan việc 2)-> để bất đồng bộ
// nếu 1 2 có ảnh hưởng (kết quả 1 cần để xử lí việc 2)-> xử lý bất đồng bộ

// VD: 
/**
 * 1. call api lấy danh sách
 * 2. từ danh sách của việc 1 hiển thị dữ liệu ra bảng // đồng bộ
 * ==> Xử lý bất đồng bộ
 */

// 3 cách xử lý bất đồng bộ
/**
 * callback
 * promise
 * async | await
 */





