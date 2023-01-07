import { mount, shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter'

describe('Pruebas en Counter', () => {
	// test('Debe de hacer match con el snapshot', () => {

	// 	const wrapper = shallowMount( Counter )

	// 	expect( wrapper.html() ).toMatchSnapshot();
	// })

	test('Should render h2 w default value', () => {

		const wrapper = shallowMount( Counter )
	
		const h2 = wrapper.find('h2');

		expect( h2.text() ).toBe('Counter')
	
	})


	test('el valor debe ser 10 en h3', () => {
		const wrapper = shallowMount( Counter )

		const h3 = wrapper.find('h3')
		expect( h3.text()).toBe("10")
	})

	test('debe de incrementar en 1 el valor del contador', async() => {
		const wrapper = shallowMount( Counter );

		const increaseBtn = wrapper.find('button');

		await increaseBtn.trigger('click');

		const h3 = wrapper.find('h3')
		expect( h3.text()).toBe("11")

	})
})