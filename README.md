# Text to Image Generator

This project is a simple web application that converts text input into an image using the Hugging Face API. It leverages the `runwayml/stable-diffusion-v1-5` model for generating images based on textual descriptions.

## Features

- Convert text descriptions into images.
- Handle loading times of the model with automatic retries.
- Simple and intuitive user interface.

## Prerequisites

- A valid Hugging Face API token.
- Basic knowledge of HTML, CSS, and JavaScript.

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rohitsharma73/text-to-image-.git
    cd text-to-image-
    ```

2. Open the project in your preferred code editor.

3. Replace `YOUR_NEW_VALID_TOKEN_HERE` in `script.js` with your Hugging Face API token.

### Usage

1. Open `index.html` in your web browser.
2. Enter a text description in the input field.
3. Click the "Generate" button.
4. The generated image will be displayed below the input field. If the model is loading, the application will retry the request after a few seconds.

## File Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `style.css`: The CSS file for styling the web application.
- `script.js`: The JavaScript file containing the logic for interacting with the Hugging Face API and handling retries.