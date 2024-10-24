<template>
	<div class="flex gap-4 w-full">
		<base-input
			v-model="device.name"
			placeholder="Введите название устройства"
			:disabled="!device.isEdit"
			:error="device.isError"
		/>
		<base-button
			class="min-w-[126px]"
			@click="device.isEdit ? saveDevice(device) : editDevice(device)"
		>
			{{ device.isEdit ? 'Сохранить' : 'Редактировать' }}
		</base-button>
		<base-button @click="$emit('delete')" color="red" class="min-w-[96px]">
			Удалить
		</base-button>
		<base-button
			@click="addKnot"
			class="w-[40px] bg-plus shrink-0"
			color="slate"
		/>
	</div>
	<draggable
		v-if="device.knots.length > 0"
		v-model="device.knots"
		item-key="id"
		class="flex flex-col gap-4"
	>
		<template #item="{ element }">
			<knot-row :knot="element" @delete="deleteKnot(element)" />
		</template>
	</draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseInput from './base/BaseInput.vue'
import BaseButton from './base/BaseButton.vue'
import { nanoid } from 'nanoid'
import KnotRow from './KnotRow.vue'
import draggable from 'vuedraggable'

export default defineComponent({
	name: 'DeviceRow',
	components: { BaseButton, BaseInput, KnotRow, draggable },
	emits: ['delete'],
	props: {
		device: {
			type: Object as PropType<Global.Device>,
			required: true,
		},
	},
	methods: {
		saveDevice(device: Global.Device) {
			if (device.name.length === 0) {
				device.isError = true
			} else {
				device.isError = false
				device.isEdit = false
			}
		},
		editDevice(device: Global.Device) {
			device.isEdit = true
		},
		addKnot() {
			this.device.knots.unshift({
				id: nanoid(),
				name: '',
				isEdit: true,
				isError: false,
			})
		},
		deleteKnot(knot: Global.Knot) {
			this.device.knots = this.device.knots.filter((k) => k.id !== knot.id)
		},
	},
})
</script>
