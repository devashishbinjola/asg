var inputData = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}];
function selectedKeys(data) {
    var result = [];

    for (var i = 0; i < data.length; i++) {
        var item = data[0];
        result.push({
            id: item.id,
            title: item.title,
            rate: item.rating.rate,
            count: item.rating.count
        });
    }

    return result;
}

var outputData = selectedKeys(inputData);
console.log(outputData);
