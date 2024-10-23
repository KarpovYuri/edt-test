declare module Global {
	interface Device {
		id: string
		name: string
		isEdit: boolean
		isError: boolean
		knots: Knot[]
	}

	interface Knot {
		id: string
		name: string
		isEdit: boolean
		isError: boolean
	}
}
