<template>
	<div class="flex flex-col gap-4 min-w-[540px]">
		<div
			v-for="device in devices"
			:key="`device-${device.id}`"
			class="flex gap-4"
		>
			<device-row :device="device" @delete="deleteDevice(device)" />
		</div>
		<base-button @click="addDevice" class="w-fit mx-auto px-10" color="purple">
			Добавить устройство
		</base-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from './components/base/BaseInput.vue'
import BaseButton from './components/base/BaseButton.vue'
import { nanoid } from 'nanoid'
import DeviceRow from './components/DeviceRow.vue'

export default defineComponent({
	name: 'App',
	components: {
		DeviceRow,
		BaseButton,
		BaseInput,
	},
	data() {
		return {
			devices: [] as Global.Device[],
		}
	},
	methods: {
		addDevice() {
			this.devices.push({
				id: nanoid(),
				name: '',
				isEdit: true,
				isError: false,
        knots: [],
			})
		},
		deleteDevice(device: Global.Device) {
			this.devices = this.devices.filter((d) => d.id !== device.id)
		},
	},
})
</script>
