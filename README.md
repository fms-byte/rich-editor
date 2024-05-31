# TinyMCE Editor Integration with Next.js

This project demonstrates the integration of the TinyMCE rich text editor in a Next.js application. The form collects a title and a description, using TinyMCE for the rich text description. The form data is displayed on the page upon submission.

## Features

- **Next.js**: The React framework for production.
- **TinyMCE**: A powerful rich text editor.
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.

## Setup

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root of the project and add your TinyMCE API key:

    ```sh
    NEXT_PUBLIC_TINYMCE_API_KEY=your-tinymce-api-key
    ```

### Running the Project

Start the development server:

```sh
npm run dev
# or
yarn dev
