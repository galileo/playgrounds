
Create dir and hop into it
```
mkdir newDir && $_ 
```

Check if npm package is installed

```
npm ls packageName
```

Silent command mode (which reduces the noise over commands)

```
npm run you_commad -s
```

Chceck the list of all available npm commands

```
npm run
```

Run local installed package

```
$(npm bin)/executable
$(npm bin)/eslint
npx eslint
```

Running global packages

```
npx your-global-package command
```
It will download temporary the package and execute the command which you fired against it.

Example:
```
npx create-react-app playground
```

Playing example:

```
npx devpun -t react | npx cowsay -f vader | npx lolcatjs
```

### Test different modules version

Get info about packages

```
npm show package-name
npm info package-name
npm view package-name
npm v package-name
````

Example:
```
npm v create-react-app
```

Get filtered info about package for example `version`:

```
npm v package-name version
```

List all the package versions:

```
npm v package-name versions
```

There can be a mess ^ but you can use npm v package-name and watch the `dist-tags` whcich are distribution tags and they
are aliases into other tags.

Running commands witch specific version:

```
npx create-react-app@next nextplayground
```

If you command requires additional package to install you can deal with that

``` 
npx -p package-name -p required-package-name -c "run command here"
npx -p package-name -p required-package-name -- run command here
```

Example:
```
npx -p eslint@next -p eslint-config-google -c "eslint ./"
```

### Run commands with different node version

```
npx -p node@8.2.1 -- node index.js 
```

### Playing with npm env variables

Get the list of env variables which you can use running `npm scripts`

```
npm run env
```

Add more package with the same prefix

```
npm i babel-{cli,preset-env,plugin-transform-object-rest-spread} -D
```

To run with npm env variables you need to execute the command within `-c` argument

```
npx -c 'babel index.js -d lib/$npm_package_version'
```

### Running github repo

Not related but if you want to go into repo from you cli just type `npm repo` and will open your repo in browser.

To run github repo as an command you need:

```
npx account/repo#branch 
```

### Runing github gist

```
npx https://yougistfile
```
the gist file must contain package.json file configured