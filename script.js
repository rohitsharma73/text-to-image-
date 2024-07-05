const token = "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";
const inputText = document.querySelector("#gen-input");
const image = document.querySelector("#image");
const btn = document.querySelector("#gen-btn");
const retryInterval = 5000; // 5 seconds

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(errorDetails)}`);
    }

    const result = await response.blob();
    return result;
}

async function generateImage() {
    try {
        const response = await query({ "inputs": inputText.value });
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);

        if (error.message.includes('503')) {
            console.log(`Retrying in ${retryInterval / 1000} seconds...`);
            setTimeout(generateImage, retryInterval);
        }
    }
}

btn.addEventListener('click', generateImage);
