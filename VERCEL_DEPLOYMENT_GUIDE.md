# Deploying Your PhotoFunBooth Next.js App to Vercel

This guide will walk you through deploying your PhotoFunBooth Next.js application to Vercel. Vercel is a platform that makes it very easy to deploy Next.js applications.

## Prerequisites

1.  **A Vercel Account:** If you don't have one, sign up for free at [https://vercel.com](https://vercel.com).
2.  **A GitHub/GitLab/Bitbucket Account:** Vercel typically deploys by connecting to a Git repository. If you don't have one, sign up for one of these services (GitHub is very popular: [https://github.com](https://github.com)).
3.  **Git installed on your computer:** If you don't have Git, download and install it from [https://git-scm.com/](https://git-scm.com/).

## Deployment Steps

1.  **Unzip the Project:**
    *   Unzip the `PhotoFunBooth.zip` file I've provided into a folder on your computer.

2.  **Initialize a Git Repository and Push to GitHub (or similar):**
    *   Open your terminal or command prompt.
    *   Navigate into the `PhotoFunBooth` directory that you unzipped:
        ```bash
        cd path/to/your/PhotoFunBooth
        ```
    *   Initialize a new Git repository:
        ```bash
        git init
        ```
    *   Add all the files to the repository:
        ```bash
        git add .
        ```
    *   Commit the files:
        ```bash
        git commit -m "Initial commit of PhotoFunBooth homepage"
        ```
    *   Create a new repository on GitHub (e.g., named `photofun-booth-site`). Make it public or private as you prefer.
    *   Follow the instructions on GitHub to link your local repository to the remote repository and push your code. It will typically involve commands like:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        git branch -M main
        git push -u origin main
        ```
        (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` accordingly.)

3.  **Deploy with Vercel:**
    *   Go to your Vercel dashboard: [https://vercel.com/dashboard](https://vercel.com/dashboard)
    *   Click on "Add New..." and then select "Project".
    *   **Import Git Repository:** Vercel will ask you to import a Git repository. Choose the GitHub (or GitLab/Bitbucket) account where you pushed your `PhotoFunBooth` code and select the repository.
    *   **Configure Project:**
        *   Vercel should automatically detect that it's a Next.js project.
        *   **Framework Preset:** Should be automatically set to "Next.js".
        *   **Build and Output Settings:** Usually, the defaults are fine for a standard Next.js app. The build command is typically `next build` or `pnpm run build` (our template uses pnpm, Vercel should handle this).
        *   **Environment Variables:** For this simple homepage, you likely don't have any specific environment variables to set up. If you add features later that require them (like API keys), you can add them here.
    *   Click "Deploy".

4.  **Wait for Deployment:**
    *   Vercel will start building and deploying your application. You can see the progress in the Vercel dashboard.
    *   Once the deployment is complete, Vercel will provide you with a public URL (e.g., `your-project-name.vercel.app`) where your website is live!

## Custom Domain (Optional)

Once deployed, you can also connect a custom domain to your Vercel project through the Vercel dashboard settings for your project.

## Troubleshooting

*   **Build Errors:** Check the build logs on Vercel. They usually provide good information about what went wrong. Common issues can be related to dependencies or incorrect build settings (though defaults should work).
*   **Ensure `package.json` and `pnpm-lock.yaml` (or `yarn.lock`/`package-lock.json`) are committed:** These files are crucial for Vercel to install the correct dependencies.

That's it! Your PhotoFun Booth homepage should now be live on Vercel.
