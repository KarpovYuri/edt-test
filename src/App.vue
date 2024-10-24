<template>
	<div class="flex flex-col gap-4 min-w-[560px]">
		<template v-for="device in devices" :key="`device-${device.id}`">
			<device-row :device="device" @delete="deleteDevice(device)" />
		</template>
		<base-button @click="addDevice" class="w-fit mx-auto px-10" color="purple">
			Добавить устройство
		</base-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { nanoid } from 'nanoid'
import DeviceRow from './components/DeviceRow.vue'
import BaseButton from './components/base/BaseButton.vue'
import { devices } from './utils/bigData.ts'

export default defineComponent({
	name: 'App',
	components: { DeviceRow, BaseButton },
	data() {
		return {
			devices: devices,
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
