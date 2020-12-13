// EX1 : In một bảng nhân của một số bất kỳ với các số từ 1 tới 10

for(let alter = 1; alter <= 10; alter++) {
    const deFault = 8;
    console.log(deFault + " x " + alter + " = " + (deFault * alter));
}

// EX2 : Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n

function parameters(number) {
    let i = 2;
    if(number >= 1 && number <= 30) {
        document.write("Các số chẵn từ 1-" + number + ":" + "\t")
        while(i <= number) {
            if(number % 2 === 0) {
                console.log(i);
                i ++
                console.log("\t");
            }
            i ++
        }
    }else {
        alert("Không hợp lệ!")
    }
}
parameters(10);

// EX3 : Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n

function total(number) {
    if(number >= 1 && number <= 30) {
        let i;
        let sum = 0;
        document.write("Tổng từ 1 đến " + number + "\t" + "=" + "\t")
        for (i = 1 ; i <= number ; i++) {
            sum += i;
        }
        console.log(sum)
    }else {
        console,log("Không hợp lệ !")
    }
}

total(10);

// EX4 : Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)

const factorial = (n) => {
    let count = 1
    for (let i = 1; i <= n; i++) {
        count *= i
    }
    console.log(count)
}

// EX5 : Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn

const EvenNumber = (params) => {
    let count = 0
    for (let i = 0; i <= params.length; i++) {
      if (params[i] % 2 === 0) {
        count += 1
      }
    }
    console.log(count)
}
