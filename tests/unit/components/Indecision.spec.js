import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue'

describe('<Indecision />', () => {

	let wrapper;
	let clgSpy;

	global.fetch = jest.fn()

	beforeEach(() => {
		wrapper = shallowMount( Indecision );
		clgSpy = jest.spyOn( console, 'log');

		jest.clearAllMocks();
	});


	test('should match snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	})

	test('escribir en el input no debe de disparar nada', async() => {

		const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

		const input = wrapper.find('input');
		await input.setValue('Hola mundo');

		expect( clgSpy ).toHaveBeenCalled();
		expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
		// expect( getAnswerSpy ).not.toHaveBeenCalled()
	})

	test('escribir el simbolo de ? debe de disparar el getAnswer', async() => {
		const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

		const input = wrapper.find('input');
		await input.setValue('Sere rico?');

		expect( clgSpy ).toHaveBeenCalledTimes(2);
		expect( getAnswerSpy ).toHaveBeenCalledTimes(1)
	})

	
})