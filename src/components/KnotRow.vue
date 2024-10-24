<template>
	<div class="flex gap-4 w-full">
		<base-input
			v-model="knot.name"
			placeholder="Введите название узла"
			:disabled="!knot.isEdit"
			:error="knot.isError"
		/>
		<base-button
			class="w-[40px] shrink-0"
			@click="knot.isEdit ? saveKnot(knot) : editKnot(knot)"
			:class="knot.isEdit ? 'bg-save' : 'bg-edit'"
		/>
		<base-button
			color="red"
			class="w-[40px] bg-trash shrink-0"
			@click="$emit('delete')"
		/>
	</div>
</template>

<script lang="ts">
import BaseButton from './base/BaseButton.vue'
import BaseInput from './base/BaseInput.vue'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	name: 'DeviceRow',
	components: { BaseButton, BaseInput },
	emits: ['delete'],
	props: {
		knot: {
			type: Object as PropType<Global.Knot>,
			required: true,
		},
	},
	methods: {
		saveKnot(knot: Global.Knot) {
			if (knot.name.length === 0) {
				knot.isError = true
			} else {
				knot.isError = false
				knot.isEdit = false
			}
		},
		editKnot(knot: Global.Knot) {
			knot.isEdit = true
		},
	},
})
</script>
