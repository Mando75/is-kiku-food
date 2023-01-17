#!/usr/bin/env sh

# Template copied from https://vitejs.dev/guide/static-deploy.html

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'www.iskikufood.com' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

git push -f git@github.com:Mando75/is-kiku-food.git master:digital-ocean-prod

cd -
