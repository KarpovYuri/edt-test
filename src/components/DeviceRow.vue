<template>
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
	<base-button @click="$emit('delete')" color="red"> Удалить </base-button>
	<base-button @click="addKnot" class="min-w-[40px]" color="slate">
		+
	</base-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseInput from './base/BaseInput.vue'
import BaseButton from './base/BaseButton.vue'

export default defineComponent({
	name: 'DeviceRow',
	components: { BaseButton, BaseInput },
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
      console.log('addKnot')
    },
	},
})
</script>
