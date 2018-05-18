# small-ngrx-generator

### Forked version of Netanel Basal ngrx-generator node package
### Helps generate ngrx boilerplate

## Getting Started

Install it via npm:

```shell
npm install small-ngrx-generator -g
```

```shell
sm-ngrx-gen
```

By default, it will create the templates in the current directory.
If you prefer the ngrx/example style -
```shell
- reducers
- services
- actions
- effects
- services
```

you can add the following line to your `package.json`
```shell
{
 "ngrxGen": {
   "basePath": "./src/app", // optional - this should be relative to your root package.json file
   "seperateDirectory": "true"
 }
}
```

## License

MIT
