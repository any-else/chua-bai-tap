/**
 * ghi nhớ 4 bước khi làm việc với DOM
 *  bước 1: truy xuất phần tử (query element) => nhiều cách
 *
 *  bước 2: kiểm tra nó có tồn tại hay không? nếu tồn tại => tiếp bước 3 ko thì mình nghỉ chơi
 *
 * bước 3: thao tác với phần tử đấy (thêm, sửa, xóa v.v.v.v)
 *
 * bước 4: gắn sự kiện hoắc xóa sự kiện thông qua onclick, onchange ...
 *
 * bước 3 + bước 4 => làm song song
 *
 */

//bai 1:
let divElement = document.querySelector("#parent");
if (!divElement) {
  console.log("nghi choi");
}

divElement.setAttribute("class", "class-parent");

//cach 1: lay tat ca thang con thong qua children
let child = divElement.children;

for (let i = 0; i < child.length; i++) {
  child[i].setAttribute("href", "#");
}

//cach 2: query tat ca

let allChild = document.querySelectorAll("#parent > a");
console.log(allChild);

//=> tuong tu

/**
 * bai 2: tao html => tao div => nhung text con ben trong ?? text => use js set background cho div => click
 */
