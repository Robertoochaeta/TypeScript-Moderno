(()=>{
    let avenger:any = 123;
    let exist;
    let power;
    avenger = 'Doctor Stranger';
    // console.log(avenger.charAt(0));
    console.log((avenger as string) .charAt(0) );
    
    avenger = 150.666631214;
    console.log((<number>avenger).toFixed(2))

    console.log(exist);
    console.log(power)
})()