# Develop
```bash
npm run start
```

# Deploy
1. Push changes to `main`
```bash
git push
```
2. Deploy to Github
```bash
cd build
npm run deploy 
```
## Force Deploy
Check [Github Actions](https://github.com/bvfusion1001/Portfolio/actions) for new deployments. If none exist you can force an empty commit to indicate changes and then repeat [Deploy](#deploy) steps.
```bash
git commit -m 'rebuild pages' --allow-empty
git push
```