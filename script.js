function onScanSuccess(decodedText, decodedResult) {
    // This executes the moment a barcode crosses the camera viewfinder
    const resultBox = document.getElementById('result-box');
    resultBox.style.display = 'block';
    resultBox.innerText = `Scanned Code: ${decodedText}`;
    
    // Optional: Send this data to a free Google Sheet using a simple fetch request
    console.log(`Scan result: ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // Verbose debug errors are ignored to ensure smooth performance
}

// Wait for the DOM to load before triggering camera hardware
document.addEventListener("DOMContentLoaded", () => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
        "interactive-video", 
        { 
            fps: 15,                  // Frames per second processing speed
            qrbox: { width: 250, height: 150 }, // Viewfinder box shape matching retail barcodes
            experimentalFeatures: { useBarCodeDetectorIfSupported: true } 
        },
        /* verbose= */ false
    );
    
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});
