function mapAsync(iterator, obj, context) {
	var arr = obj.map(iterator);
	return Promise.all(arr);	
};
function mapAsyncInOrder(iterator, array, context) {
	var arr = []
	var n = array.length
	for(var i =0; i<n; i++){
		var collect = iterator.call(context, array[i], i, array)
		arr.push(collect);
	}
	return Promise.all(arr);
};
function mapAsyncInDescendingOrder(iterator, array, context) {
	var arr = []
	var n = array.length
	for(var i =0; i<n; i++){
		var collect = iterator.call(context, array[i], i, array)
		arr.push(collect);
	}
	return Promise.all(arr);
};