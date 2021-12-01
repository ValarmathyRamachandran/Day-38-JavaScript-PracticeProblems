let head = 0
let tail = 0

while (( head < 11 ) &&( tail < 11 ))
{
    let flipCoin = ( Math.floor(Math.random() * 10) % 2 ) ;
    console.log(flipCoin);
    if ( flipCoin == 0 ) {
        head = ( head + 1 );
    } else {
        tail= ( tail + 1 );
    }        
} 
    console.log( "Number of Times Head occured:  "+head);
    console.log( "Number of Times Tail occured:  "+tail);