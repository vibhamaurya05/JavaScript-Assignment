// program to print prime numbers between the two numbers

for (let m=1; m <= 20; m++) {

    let flag = 0;

    for(let n=2; n < m; n++){

        if(m%n==0){

            flag= 1;
            break;
        }

    }

    if(m > 1 && flag == 0)
        console.log(m);

}