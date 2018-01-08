export default function platzom(str){
	let translation = str

	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)// Permite cortar caracteres
	}

	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}

	const length = translation.length
	if(translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}` 
	}

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length2 = str.length
		let translation2 = ''
		let capitalize = true

		for (let i = 0; i < length2; i++) {
			const char = str.charAt(i)
			translation2 += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation2
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}