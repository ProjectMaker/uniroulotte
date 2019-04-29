import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: { main: '#7eb940' }
	},
	typography: {
		useNextVariants: true,
		h6: {
			color: '#ac5252'
		},
		subtitle1: {
			fontWeight: 500
		}
	}
})
