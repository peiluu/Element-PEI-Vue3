/* eslint-disable no-unused-vars */
export const def = function (obj, key, value, enumerable) {
	Object.defineProperty(obj, key, {
		value,
		enumerable,
		writable: true,
		configurable: true,
	});
};


