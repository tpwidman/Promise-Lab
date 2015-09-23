function mapAsync(iterator, obj, context) {
	var arr = obj.map(iterator);
	return Promise.all(arr);	
};

function mapAsyncWithOrder(iterator, array, context, descending){
	var initialValue = Promise.resolve([]);
	if(!Array.isArray(array)) {
		return initialValue;
	}
	  iterator = iterator.bind(context);
	  	var inOrder = function(prevValue, nextValue, nextIndex, array){
			  return prevValue.then(function(items){
				  return iterator(nextValue, nextIndex, array).then(function(moreItems) {
				  	 return items.concat(moreItems);
			  });
			});
		  }
	if (descending) {
		return array.reduceRight(inOrder, initialValue);
	}
	return array.reduce(inOrder, initialValue);
}
function mapAsync (iterator, obj, context){
	return Promise.all(map(iterator, obj, context));
};
function mapAsyncInOrder(iterator, array, context) {
	return mapAsynceWithOrder(iterator, array, context);
};
function mapAsyncInDescendingOrder(iterator, array, context) {
	return mapAsynceWithOrder(iterator, array, context, true);
};