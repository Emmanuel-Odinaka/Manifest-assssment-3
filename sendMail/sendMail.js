function sendMailById() {
	let evenBatch = []
	let oddBatch = []
    for (let i=1; i<=100; i++) {
		if (i % 2 === 0) {
			evenBatch.push(i)
		} else {
			oddBatch.push(i)
		}
	} 
	console.log(evenBatch)
	console.log(oddBatch)
	console.log(`There are ${evenBatch.length} even batch User ID`)
	console.log(`There are ${oddBatch.length} odd batch User ID`)
}
sendMailById()

