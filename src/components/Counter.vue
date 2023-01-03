<template>
	<h2>{{ customTitle }}</h2>
	<p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
	<p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
	<p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
	<h3>{{ counter }}</h3>
	<div>
		<button @click="increase">+1</button>
		<button @click="decrease">-1</button>
	</div>
</template>

<script>
export default {
	// props: ['title', 'start'],
	props: {
		title: String,
		start:{
			type: Number,
			required: true,
			validator(value){
				return value >= 0
			}
		} 
	},
	name: 'Counter',
	data(){
		return {
			counter: this.start
		}	
	},
	methods: {
		getSquare(){
			return this.counter * this.counter;
		},
		increase(){
			this.counter++;
		},
		decrease(){
			this.counter--;
		}
	},
	// guarda las propiedades en el cache
	computed: {
		squareCounter(){
			console.log('Computed squareCounter');
			return this.counter * this.counter;
		},
		customTitle(){
			return this.title ? this.title : 'Counter'
		}
	}
}
</script>

<style>

button{
	background-color: #64BB87;
	border-radius: 5px;
	color: white;
	border: none;
	padding: 10px;
	margin: 5px 15px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
}

button:hover{
	background-color: #478761;
	transition: 0.3s ease-in-out;
}

</style>