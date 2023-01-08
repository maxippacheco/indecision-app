import { mount, shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter'

describe('Pruebas en Counter', () => {
	// test('Debe de hacer match con el snapshot', () => {

	// 	const wrapper = shallowMount( Counter )

	// 	expect( wrapper.html() ).toMatchSnapshot();
	// })
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount( Counter );
	})

	test('Should render h2 w default value', () => {

	
		const h2 = wrapper.find('h2');

		expect( h2.text() ).toBe('Counter');
	
	})


	test('el valor debe ser 10 en h3', () => {
		const wrapper = shallowMount( Counter )

		const h3 = wrapper.find('h3');
		expect( h3.text()).toBe("10");
	})

	test('debe de incrementar en 1 el valor del contador', async() => {

		const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button');

		await increaseBtn.trigger('click');
		await increaseBtn.trigger('click');
		await increaseBtn.trigger('click');


		await decreaseBtn.trigger('click');
		await decreaseBtn.trigger('click');

		const h3 = wrapper.find('h3');

		expect( h3.text()).toBe("11");

	})

	test('debe de establecer el valor por defecto', () => {
		const { start } = wrapper.props()
		// const start = wrapper.props('start')
		const value = wrapper.find('h3').text()

		expect( Number(value) ).toBe( start )
	})

	test('debe mostrar prop title', () => {
		
		const title = "Hola mundo"
		
		const wrapper = shallowMount( Counter, {
			props: {
				title,
			}
		})

		expect( wrapper.find("h2").text() ).toBe( title )


	});
})