# highlightjs-lang-colorized

A highlight.js grammar and css ruleset which colorizes Minecraft's lang code such that the values match what it would look like in-game. Supports Java and Bedrock edition's different rendering rules.

## Usage

### Browser

To use on your webpage, link both the compiled script and the style.
You will also need the base highlight.js library.

```html
<script src="https://adamraichu.github.io/highlightjs-lang-colorized/dist/lang-colorized-java.min.js"></script>
<!-- Not YET COMPLETE <script src="https://adamraichu.github.io/highlightjs-lang-colorized/dist/lang-colorized-bedrock.min.js"></script> -->
<!-- Note: If you only plan on highlighting one flavor of syntax, there is no need to include both here. -->
<link rel="stylesheet" href="https://adamraichu.github.io/highlightjs-lang-colorized/src/styles/lang-colorized.css">
```

To highlight a code block, give it the class `language-lang-colorized-<version>`.
Then call `hljs.highlightAll()`.
*The version you choose will affect how certain `§` formatters and highlighters take effect.*
