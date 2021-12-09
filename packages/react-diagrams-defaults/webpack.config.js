const config = require('../../webpack.shared')(__dirname);
module.exports = {
	...config,
	output: {
		...config.output,
		library: 'nosferatu500/react-diagrams-defaults'
	}
};
