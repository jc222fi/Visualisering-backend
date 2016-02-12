(function () {
    // if user is running mozilla then use it's built-in WebSocket
        window.WebSocket = window.WebSocket || window.MozWebSocket;

        var connection = new WebSocket('ws://127.0.0.1:8000');

        connection.onopen = function () {
        console.log('hello websocket');
    };

    connection.onerror = function (error) {
        console.log('an error occurred when sending/receiving data' + err);
    };

    connection.onmessage = function (message) {
        try {
            json = JSON.parse(message.data);
            console.log(json);
            var websocketdiv = document.querySelector('#websockets');
            websocketdiv.innerHTML = json;
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
    };
})();