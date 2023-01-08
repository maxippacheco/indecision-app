import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue'

describe('<Indecision />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount( Indecision );
	})


	test('should match snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	})

	test('escribir en el input no debe de disparar nada', async() => {
		const input = wrapper.find('input');
		input.setValue('Hola mundo');
	})

	
})