// Xử lý bất đồng bộ trong JS

// JS là ngôn ngữ đơn luồng (Đồng bộ)

console.log(1);
console.log(2);
console.log(3);
// 1 2 3

// call api, setTimeout, setInterval, load, click,... JS xử lí bất đồng bộ

// setTimeout(() => {
//     console.log(2);
// }, 3000); // chờ 3s -> ()=>{}

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

// callback: hàm gọi lại hàm khác, truyền qua tham số của hàm đó

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// function greeting(callback) {
//     callback("Truongdx");
// }

// greeting(sayHello);
// greeting((name)=>{
//     console.log(`Hello ${name} 2`);
// })

// fake 1 tác vụ bất đồng bộ
function delay(ms, callback) {
    setTimeout(() => {
        const data = "Hoàn thành tác vụ bất đồng bộ";
        callback(data)
    }, ms)
}

function doingCallback() {
    console.log("Viec 1");
    delay(1500, (data) => {
        console.log(data);
        console.log("Viec 2");

        delay(2000, (data) => {
            console.log(data);
            console.log("Viec 3");
        })
    })
}
doingCallback();

// promise: thành công | thất bại
// const myPromise = new Promise((resolve, reject) => {
//     const isCheck = true;
//     if (isCheck) {
//         resolve("Success")
//     } else {
//         reject("Fail")
//     }
// })
// // Thực thi
// myPromise
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log("Done")
//     })

function delay(ms){
    return new Promise((resolve,reject)=>{
        const isCheck = true;
        setTimeout(()=>{
            if(isCheck){
                resolve("Hoàn thành tác vụ bất đồng bộ")
            }else{
                reject("Thất bại")
            }
        },ms)
    })
}

function doingPromise(){
    console.log("Viec 1");
    delay(2000)
    .then((data)=>{
        console.log(data);
        console.log("Viec 2");
        return delay(1000);
    })
    .then((data)=>{
        console.log(data);
        console.log("Viec 3");
        return delay(1000);
    })
    .then((data)=>{
        console.log(data);
        console.log("Viec 4");
        return delay(1000);
    })
    .catch(error=>
        console.log(error)
    )
    .finally()
}

// doingPromise();


// async | await
async function doingAsync(){
    console.log("Viec 1");
    const data = await delay(1500);
    console.log(data);
    console.log("Viec 2");

    const data1 = await delay(1500);
    console.log(data);
    console.log("Viec 3");
}
doingAsync();




















