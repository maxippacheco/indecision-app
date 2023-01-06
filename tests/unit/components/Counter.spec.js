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
})