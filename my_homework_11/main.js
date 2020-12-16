// Bài 2: Viết 1 hàm để đảo ngược 1 mảng

const deleteElementarray = array => {
    const newarray = []

    for(let i = array.length - 1; i >=0; i--) {
        newarray.push(array[i])
    }
    return newarray;
}

console.log (newarray)

// Bài 3: Xóa đi các giá trị được xem là sai

const array = [0, 1, false, 2, undefined, '', 3, null];

const newarray = array.filter(function(arrays) {
    return arrays
})

// Bài 4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu

const neWobject = selectiveArr => {
    const createObject = {}
  
    importArr.forEach(array => {
        selectiveArr[array[0]] = array[1]
    })
  
    return createObject
}

// Bài 5: Sắp xếp mảng tăng dần

const number = [6, 4, 0, 3, -2, 1];

const newNumber = number.sort(function (a,b) {
    if(a > b) {
        return 1
    } else if(a < b) {
        return -1
    } else if(a == b) {
        return 0
    }
})

console.log(newNumber) 

// Bài 6: Kiểm tra input đầu vào có phải là object hay không?

const myObject = (objects) => {
    if (typeof objects !== "object" && Array.isArray(objects)) {
      return true;
    }
    return false;
}

// Bài 8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa

const deleteElementArray = (array) => {
    if (!(Array.array(array)) && array.length < 5) {
      return `data false`
    }
    array.splice(1, 2)
    return array
}
