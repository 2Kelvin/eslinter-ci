# ESLinter CI

Automatically check Javascript and Typescript code style (Linting) and formatting on every `pull request`.

Use the official [EsLint docs](https://eslint.org/docs/latest/use/getting-started#installation-and-usage) to setup **ESLint configuration file**.

This command runs `ESLint checks` on all the `js`, `mjs`, `cjs` and `ts` files in the whole project; even those in subdirectories. By default, ESLint doesn't test said file extensions in hidden folders, ignored folders or node_modules folder.

```bash
npx eslint .
```
