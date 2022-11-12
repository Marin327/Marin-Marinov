function solve(number) {

    let compleated = '%'.repeat(number / 10)
    let incomplete = '.'.repeat(10 - compleated.length);

    if (incomplete.length === 0) {
        console.log("100% Complete!");
    } else {
        console.log(`${number}% [${compleated}${incomplete}]`);
        console.log('Still loading...')
    }

}
solve(30)