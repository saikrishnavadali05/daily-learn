---
title: Deploy a Docusaurus website on Vercel
---

### How to deploy a Docusaurus website on Vercel?

To deploy a Docusaurus site to Vercel:

1. **Prepare your Docusaurus site**:
   Make sure your site is working locally. The default build output directory is `build/`.

2. **Push your code to GitHub/GitLab/Bitbucket**:
   Vercel pulls your repo from one of these services.

3. **Create a Vercel account**:
   Go to [vercel.com](https://vercel.com) and sign in using your GitHub/GitLab/Bitbucket account.

4. **Import your repository**:
   After logging in, click on "Add New Project", then choose your Docusaurus repo.

5. **Configure build settings**:
   Vercel should auto-detect the framework, but if not, set:

   - **Framework Preset**: `Other`
   - **Build Command**: `npm run build` or `yarn build`
   - **Output Directory**: `build`

6. **Add a vercel.json file** *(optional but recommended)*:
   If you want to customize routing or ensure proper static hosting, you can add this to your root:

   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
     "redirects": [],
     "headers": [],
     "cleanUrls": true
   }
````

7. **Deploy**:
   Click “Deploy” and Vercel will build and deploy your Docusaurus site.

8. **Custom domain** (optional):

   * In the Vercel dashboard, go to your project > Settings > Domains.
   * Add your custom domain and configure DNS accordingly.

Now your Docusaurus site will be live and automatically re-deploy on every git push.

---

```