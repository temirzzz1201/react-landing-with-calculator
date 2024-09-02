export function isNumber(num) {
	return typeof num === 'number' && !Number.isNaN(num);
}


export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}