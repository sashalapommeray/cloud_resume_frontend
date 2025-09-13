# cloud_resume_frontend

This repository contains the frontend source code for my cloud-hosted resume, created as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). The static website is built with HTML, CSS, and vanilla JavaScript. It is hosted on AWS using S3 for storage and CloudFront for content delivery.

## Features
*   A responsive, single-page resume with professional experience, skills, and projects.
*   A dynamic visitor counter that integrates with a serverless backend.
*   Separate pages for the resume, visitor counter, and project credits.
*   Clean and modern user interface.

## Technology Stack
*   **Frontend:** HTML, CSS, JavaScript
*   **Cloud Services (AWS):**
    *   **Amazon S3:** Used for static website hosting.
    *   **Amazon CloudFront:** Acts as the Content Delivery Network (CDN) to serve the website with low latency and created an `invalidation` to clear the cache upon updates.
*   **CI/CD:**
    *   **GitHub Actions:** Automates the deployment process to AWS.

## Visitor Counter
The visitor counter functionality is handled by `visitor_counter.js`. It communicates with a serverless backend powered by AWS Lambda and API Gateway.

*   **API Endpoint:** `https://44gkxl6irc.execute-api.us-east-1.amazonaws.com/Prod/counter`
*   **Logic:**
    1.  The script checks `localStorage` to see if the user has visited the site before.
    2.  **First-time visitors:** It sends a `POST` request to the API to increment the counter and then stores a `visited` flag in `localStorage`. The counter page displays a "You are visitor number X" message.
    3.  **Returning visitors:** It sends a `GET` request to the API to fetch the current total count. The counter page displays a "Total visitors: X" message.

## CI/CD Pipeline
The deployment process is automated using the GitHub Actions workflow defined in `.github/workflows/frontend_deploy.yml`.

The workflow is triggered on every `push` to the `main` branch and performs the following steps:
1.  **Checkout Code:** Checks out the latest version of the repository.
2.  **Configure AWS Credentials:** Sets up AWS access using secrets stored in the repository.
3.  **Sync to S3:** Synchronizes the website files to the designated S3 bucket. It uses the `--delete` flag to remove old files and excludes the `.git`, `.github`, and `README.md` files from the upload.
4.  **Invalidate CloudFront Cache:** Creates a cache invalidation for all files (`/*`) in the CloudFront distribution to ensure users receive the most up-to-date version of the site immediately after deployment.

## File Structure
- `resume.html`: The main page displaying the resume content.
- `visitor_counter.html`: The page dedicated to displaying the visitor count.
- `credits.html`: A page acknowledging the tools and resources used.
- `error.html`: A custom 404 error page.
- `resume.css`: The stylesheet providing the design for all HTML pages.
- `visitor_counter.js`: The JavaScript logic for fetching and displaying the visitor count.
- `.github/workflows/frontend_deploy.yml`: The GitHub Actions workflow for automated CI/CD.