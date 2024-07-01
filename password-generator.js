import { generate } from 'generate-password';

var password = generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);