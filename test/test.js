const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")
	})

	it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos y unirlas con guion', function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})