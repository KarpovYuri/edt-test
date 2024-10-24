<template>
	<input
		v-model="text"
		class="text-black w-full outline-0 p-2 rounded-md"
		:class="{
			'bg-[#242424] text-white truncate': disabled,
			'outline outline-2 outline-red-500': error,
		}"
		type="text"
		:disabled="disabled"
    :placeholder="placeholder"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'BaseInput',
	props: {
		modelValue: {
			required: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
    placeholder: {
      type: String,
      default: 'Введите текст',
    }
	},
	data() {
		return {
			text: this.modelValue,
		}
	},
	watch: {
		text: function () {
			this.$emit('update:modelValue', this.text)
		},
	},
})
</script>
