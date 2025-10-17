document.getElementById('solve').addEventListener('click', function() {
    var url = document.getElementById('url').value || 
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    Tesseract.recognize(
    url, 
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById('result').innerHTML = text;
    }).catch(function(err) {
        document.getElementById('result').innerHTML = "Error: " + err.message;
    });
});