<template>
	<button
		class="p-2 text-white rounded-md bg-[length:24px_24px] bg-no-repeat bg-center"
		:class="{
			'bg-sky-500': color === 'sky',
			'bg-red-500': color === 'red',
			'bg-slate-500': color === 'slate',
			'bg-purple-500': color === 'purple',
		}"
	>
		<slot />
	</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	name: 'BaseButton',
	props: {
		color: {
			type: String as PropType<'sky' | 'red' | 'slate' | 'purple'>,
			default: 'sky',
		},
	},
})
</script>
