module.exports = {
  extends: ['react-app', 'airbnb'],
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    browser: true,
    es6: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js'
      }
    }
  },
  rules: {
    // Ensure no unused prop types.
    'react/no-unused-prop-types': 'warn',

    // When creating a JSX element that has an a tag, it is often desired to
    // have the link open in a new tab using the `target='_blank'` attribute.
    // Using this attribute unaccompanied by `rel='noreferrer noopener'`,
    // however, is a severe security vulnerability. This rules requires that you
    // accompany `target='_blank'` attributes with `rel='noreferrer noopener'`.
    'react/jsx-no-target-blank': 'error',

    // Disallow this keywords outside of classes or class-like objects.
    // NOTE: This has been turn off because we want babel to pick this up.
    // This allowed proper parsing for fat-arrow-functions in classes to be
    // recognized as well. See rule babel/no-invalid-this.
    'no-invalid-this': 'off',

    // Disallow this keywords outside of classes or class-like objects.
    'babel/no-invalid-this': 'error',

    // Ensure correct spacing around the arrow in an arrow-function.
    'arrow-spacing': 'warn',

    // Enforce the location of arrow function bodies with implicit returns.
    'implicit-arrow-linebreak': 'warn',

    // Ensure no unused states.
    'react/no-unused-state': 'warn',

    // Enforces consistent naming for boolean props.
    'react/boolean-prop-naming': 'off',

    // Enforce consistent usage of destructuring assignment of props, state, and context.
    'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],

    // Prevent using this.state within a this.setState.
    'react/no-access-state-in-setstate': 'warn',

    // Enfore efficient linebreaked statements.
    'operator-linebreak': 'warn',

    // Ensure no useless constructors.
    'no-useless-constructor': 'warn',

    // Disallow the usage of the "dangerouslySetInnerHTML" -attribute.
    'react/no-danger': 'off',

    // Ensure correct code indentation for JSX.
    'react/jsx-indent-props': 'warn',

    // Ensure no unnecessary braces are used.
    'react/jsx-curly-brace-presence': 'warn',

    // Validate JSX has key prop when in array or iterator.
    'react/jsx-key': 'error',

    // Prefer attributes without the value when attr={true}.
    'react/jsx-boolean-value': 'warn',

    // Ensure closing tag to match indentation of opening of tag.
    'react/jsx-closing-tag-location': 'warn',

    // Ensure consistent use of file extension within the import path.
    'import/extensions': 'error',

    // Require a newline after each call in a method chain.
    'newline-per-chained-call': 'warn',

    // Require using arrow functions for callbacks.
    'prefer-arrow-callback': 'warn',

    // Disallow or enforce spaces inside of blocks after opening block and
    // before closing block.
    'block-spacing': 'warn',

    // Require or disallow newlines around variable declarations.
    'one-var-declaration-per-line': 'warn',

    // Suggest using const on variables that are never re-assigned.
    'prefer-const': 'warn',

    // Prefer absolute imports defined before relative imports.
    'import/first': 'off',

    // Limiting the maximum of props on a single line (default: 1).
    'react/jsx-max-props-per-line': 1,

    // Ensure correct position of the first property.
    'react/jsx-first-prop-new-line': 'warn',

    // Enforce spacing around jsx equals signs.
    'react/jsx-equals-spacing': 'warn',

    // Disallow wrong indentation.
    'react/jsx-indent': 'warn',

    // Validate closing bracket location in JSX.
    'react/jsx-closing-bracket-location': 'off',

    // Disallow mutable export variables.
    'import/no-mutable-exports': 'error',

    // Disallow dependencies being used in devDependencies.
    'import/no-extraneous-dependencies': 'off',

    // Require object literal shorthand syntax.
    'object-shorthand': ['off', 'never'],

    // Require each propery in object to go on a newline.
    'object-curly-newline': 'off',

    // Require the use of parenthesis instead of curly braces when the only line
    // in an arrow function is a return statement.
    'arrow-body-style': 'off',

    // Disallow or enforce trailing commas.
    'comma-dangle': ['warn', 'always-multiline'],

    // Prefer default export when only 1 item is being exported in a file.
    'import/prefer-default-export': 'off',

    // Disallow assignment in conditional expressions.
    'no-cond-assign': 'warn',

    // Disallow use of console.
    'no-console': 'off',

    // Disallow use of constant expressions in conditions.
    'no-constant-condition': 'warn',

    // Disallow control characters in regular expressions.
    'no-control-regex': 'warn',

    // Disallow continue statements.
    'no-continue': 'warn',

    // Disallow object as prop type.
    'react/forbid-prop-types': 'warn',

    // Disallow use of debugger.
    'no-debugger': 'warn',

    // Disallow duplicate arguments in functions.
    'no-dupe-args': 'error',

    // Disallow duplicate keys when creating object literals.
    'no-dupe-keys': 'error',

    // Disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // Disallow empty statements.
    'no-empty': 'warn',

    // Disallow the use of empty character classes in regular expressions.
    'no-empty-character-class': 'error',

    // Disallow assigning to the exception in a catch block.
    'no-ex-assign': 'error',

    // Disallow double-negation boolean casts in a boolean context.
    'no-extra-boolean-cast': 'warn',

    // Disallow unnecessary semicolons.
    'no-extra-semi': 'warn',

    // Disallow overwriting functions written as function declarations.
    'no-func-assign': 'error',

    // Disallow function or variable declarations in nested blocks.
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in the RegExp constructor.
    'no-invalid-regexp': 'error',

    // Disallow mixes of different operators.
    'no-mixed-operators': 'off',

    // Disallow irregular whitespace outside of strings and comments.
    'no-irregular-whitespace': 'error',

    // Disallow negation of the left operand of an in expression.
    'no-negated-in-lhs': 'error',

    // Disallow the use of object properties of the global object
    // (Math and JSON) as functions.
    'no-obj-calls': 'error',

    // Disallow multiple spaces in a regular expression literal.
    'no-regex-spaces': 'warn',

    // Disallow sparse arrays.
    'no-sparse-arrays': 'error',

    // Disallow unreachable statements after a return, throw, continue, or break
    // statement.
    'no-unreachable': 'warn',

    // Disallow comparisons with the value NaN.
    'use-isnan': 'error',

    // Ensure JSDoc comments are valid.
    'valid-jsdoc': 'warn',

    // Ensure that the results of typeof are compared against a valid string.
    'valid-typeof': 'error',

    // Enforces return statements in callbacks of array's methods.
    'array-callback-return': 'off',

    // Treat var statements as if they were block scoped.
    // Deep destructuring is not compatible.
    // https://github.com/eslint/eslint/issues/1863
    'block-scoped-var': 'off',

    // Enforce object & array destructuring.
    'prefer-destructuring': 'warn',

    // Specify the maximum cyclomatic complexity allowed in a program.
    complexity: 'off',

    // Require return statements to either always or never specify values.
    'consistent-return': 'off',

    // Specify curly brace conventions for all control statements.
    curly: 'warn',

    // Require default case in switch statements.
    'default-case': 'warn',

    // Encourages use of dot notation whenever possible.
    'dot-notation': 'off',

    // Require the use of === and !==.
    eqeqeq: 'warn',

    // Make sure for-in loops have an if statement.
    'guard-for-in': 'off',

    // Disallow the use of alert, confirm, and prompt.
    'no-alert': 'warn',

    // Disallow use of arguments.caller or arguments.callee.
    'no-caller': 'error',

    // Disallow division operators explicitly at beginning of regular expression.
    'no-div-regex': 'off',

    // Disallow else after a return in an if.
    'no-else-return': 'off',

    // Disallow comparisons to null without a type-checking operator.
    'no-eq-null': 'error',

    // Disallow use of eval().
    'no-eval': 'error',

    // Disallow adding to native types.
    'no-extend-native': 'error',

    // Disallow unnecessary function binding.
    'no-extra-bind': 'error',

    // Disallow fallthrough of case statements.
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal points in numeric
    // literals.
    'no-floating-decimal': 'error',

    // Disallow use of eval()-like methods.
    'no-implied-eval': 'error',

    // Disallow usage of __iterator__ propertoy.
    'no-iterator': 'error',

    // Disallow use of labeled statements.
    'no-labels': 'off',

    // Disallow unnecessary nested blocks.
    'no-lone-blocks': 'warn',

    // Disallow creation of functions within loops.
    'no-loop-func': 'error',

    // Disallow use of multiple spaces.
    'no-multi-spaces': 'warn',

    // Disallow use of multiline strings.
    'no-multi-str': 'error',

    // Disallow reassignments of native objects.
    'no-native-reassign': 'error',

    // Disallow use of new operator when not part of the assignment or comparison.
    'no-new': 'warn',

    // Disallow use of new operator for Function object.
    'no-new-func': 'error',

    // Disallows creating new instances of String,Number, and Boolean.
    'no-new-wrappers': 'error',

    // Disallow use of octal literals.
    'no-octal': 'error',

    // Disallow use of octal escape sequences in string literals, such as var
    // foo = "Copyright \251";
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters.
    'no-param-reassign': 'off',

    // Disallow use of process.env
    'no-process-env': 'off',

    // Disallow usage of __proto__ property.
    'no-proto': 'error',

    // disallow declaring the same variable more then once.
    'no-redeclare': 'error',

    // Disallow use of assignment in return statement.
    'no-return-assign': 'off',

    // Require parens in arrow function arguments.
    'arrow-parens': ['warn', 'always', { requireForBlockBody: false }],

    // Disallow use of javascript: urls.
    'no-script-url': 'error',

    // Disallow comparisons where both sides are exactly the same.
    'no-self-compare': 'error',

    // Disallow use of comma operator.
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception.
    'no-throw-literal': 'error',

    // Disallow usage of expressions in statement position.
    'no-unused-expressions': 'warn',

    // Disallow use of void operator.
    'no-void': 'error',

    // Disallow usage of configurable warning terms in comments": 'error',
    // e.g. TODO or FIXME
    'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }],

    // Disallow use of the with statement.
    'no-with': 'error',

    // Require use of the second argument for parseInt().
    radix: 'off',

    // Requires to declare all vars on top of their containing scope.
    'vars-on-top': 'off',

    // Require immediate function invocation to be wrapped in parentheses.
    'wrap-iife': 'error',

    // Require or disallow Yoda conditions.
    yoda: 'warn',

    // Controls location of Use Strict Directives.
    strict: 'off',

    // Disallow the catch clause parameter name being the same as a variable in
    // the outer scope.
    'no-catch-shadow': 'error',

    // Disallow deletion of variables.
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable.
    'no-label-var': 'error',

    // Disallow declaration of variables already declared in the outer scope.
    'no-shadow': 'warn',

    // Disallow shadowing of names such as arguments.
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block.
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables.
    'no-undef-init': 'error',

    // Disallow Use of Chained Assignment Expressions.
    'no-multi-assign': 'warn',

    // Disallow use of undefined variable.
    'no-undefined': 'error',

    // Disallow declaration of variables that are not used in the code.
    'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],

    // Disallow use of variables before they are defined.
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],

    // Disallow specified properties.
    'no-restricted-properties': 'warn',

    // Disallow specified syntax.
    'no-restricted-syntax': 'warn',

    // This option sets a specific tab width for your code.
    indent: ['warn', 2, { SwitchCase: 1 }],

    // Enforce one true brace style.
    'brace-style': 'off',

    // Require camel case names.
    camelcase: 'warn',

    // Enforce spacing before and after comma.
    'comma-spacing': ['warn', { before: false, after: true }],

    // Enforce one true comma style.
    'comma-style': ['warn', 'last'],

    // Enforces consistent naming when capturing the current execution context.
    'consistent-this': ['off', '_this'],

    // Enforce newline at the end of file, with no multiple empty lines.
    'eol-last': 'warn',

    // Require function expressions to have a name.
    'func-names': 'off',

    // Enforces use of function declarations or expressions.
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // Enforces spacing between keys and values in object literal properties.
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

    // Specify the maximum depth callbacks can be nested.
    'max-nested-callbacks': ['warn', 5],

    // Require a capital letter for constructors
    'new-cap': ['warn', { newIsCap: true, capIsNew: false }],

    // Disallow the omission of parentheses when invoking a constructor with no
    // arguments.
    'new-parens': 'warn',

    // Allow or disallow an empty newline after var statement.
    'newline-after-var': 'off',

    // Disallow use of the Array constructor.
    'no-array-constructor': 'off',

    // Disallow comments inline after code.
    'no-inline-comments': 'off',

    // Disallow if as the only statement in an else block.
    'no-lonely-if': 'warn',

    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'warn',

    // Disallow multiple empty lines.
    'no-multiple-empty-lines': ['warn', { max: 2 }],

    // Disallow nested ternary expressions.
    'no-nested-ternary': 'warn',

    // Disallow use of the Object constructor.
    'no-new-object': 'off',

    // Disallow space between function identifier and application.
    'no-spaced-func': 'warn',

    // Disallow the use of ternary operators.
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': 'warn',

    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 'off',

    // Disallow unnecessary parentheses.
    'no-extra-parens': 'off',

    // Make people use more spaces after block statements instead of blocks
    // being tied together.
    'padding-line-between-statements': 'off',

    // Allow just one var statement per function.
    'one-var': ['warn', 'never'],

    // Require assignment operator shorthand where possible or prohibit it
    // entirely.
    'operator-assignment': ['off', 'never'],

    // Enforce that class methods utilize this.
    'class-methods-use-this': 'off',

    // Enforce padding within blocks.
    'padded-blocks': ['off', 'never'],

    // Require or disallow an empty line between class members.
    'lines-between-class-members': ['warn', 'always'],

    // Require quotes around object literal property names.
    'quote-props': ['warn', 'as-needed'],

    // Specify whether double or single quotes should be used.
    quotes: ['off', 'single'],

    // Require or disallow use of semicolons instead of ASI.
    semi: ['warn', 'always'],

    // Enforce spacing before and after semicolons.
    'semi-spacing': ['warn', { before: false, after: true }],

    // Sort variables within the same declaration block.
    'sort-vars': 'off',

    // Require a space after certain keywords.
    'keyword-spacing': ['warn', { before: true, after: true }],

    // Require or disallow space before blocks.
    'space-before-blocks': ['warn', 'always'],

    // Enforce consistent line breaks inside function parentheses.
    'function-paren-newline': 'off',

    // Require or disallow space before function opening parenthesis.
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never' }],

    // Require or disallow spaces inside object.
    'object-curly-spacing': ['warn', 'always'],

    // Require or disallow spaces inside arrays.
    'array-bracket-spacing': ['warn', 'never'],

    // Require or disallow spaces inside arrays/object inside each other.
    'computed-property-spacing': ['warn', 'never'],

    // Require or disallow spaces inside parentheses.
    'space-in-parens': ['warn', 'never'],

    // Require spaces around operators.
    'space-infix-ops': 'warn',

    // Require or disallow spaces before/after unary operators.
    'space-unary-ops': ['warn', { words: true, nonwords: false }],

    // Require or disallow a space immediately following the // in a line
    // comment.
    'spaced-comment': ['warn', 'always'],

    // Require regex literals to be wrapped in parentheses.
    'wrap-regex': 'off',

    // Require let or const instead of var.
    'no-var': 'error',

    // Enforce the spacing around the * in generator functions.
    'generator-star-spacing': ['error', 'before'],

    // Specify the maximum depth that blocks can be nested.
    'max-depth': ['warn', 4],

    // Specify the maximum length of a line in your program.
    'max-len': ['off', 80, 2],

    // Limits the number of parameters that can be used in the function
    // declaration.
    'max-params': ['off', 99],

    // Specify the maximum number of statement allowed in a function.
    'max-statements': 'off',

    // Disallow use of bitwise operators.
    'no-bitwise': 'off',

    // Disallow use of unary operators, ++ and --.
    'no-plusplus': 'off',

    // Prevent missing displayName in a React component definition.
    'react/display-name': 'off',

    // Require a space before the closing tag.
    'react/jsx-tag-spacing': 'warn',

    // Enforce quote style for JSX attributes.
    'jsx-quotes': ['warn', 'prefer-double'],

    // Disallow undeclared variables in JSX.
    'react/jsx-no-undef': 'error',

    // Enforce props alphabetical sorting.
    'react/jsx-sort-props': 'off',

    // Prevent React to be incorrectly marked as unused.
    'react/jsx-uses-react': 'error',

    // Enforce stateless React Components to be written as a pure function.
    'react/prefer-stateless-function': 'warn',

    // Prevent variables used in JSX to be incorrectly marked as unused.
    'react/jsx-uses-vars': 'error',

    // Prevent function binding outside of the constructor.
    'react/jsx-no-bind': 'error',

    // Prevent usage of setState in componentDidMount.
    'react/no-did-mount-set-state': 'warn',

    // Prevent usage of setState in componentDidUpdate.
    'react/no-will-update-set-state': 'warn',

    // Prevent usage of setState in componentDidUpdate.
    'react/no-did-update-set-state': 'warn',

    // Prevent multiple component definition per file.
    'react/no-multi-comp': 'off',

    // Prevent usage of unknown DOM property.
    'react/no-unknown-property': 'warn',

    // Prevent missing props validation in a React component definition.
    'react/prop-types': 'off',

    // Prevent missing React when using JSX.
    'react/react-in-jsx-scope': 'error',

    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': 'warn',

    // Prevent missing parentheses around multilines JSX.
    'react/jsx-wrap-multilines': 'warn',

    // Prevent that an element uses an Array index in its key property.
    'react/no-array-index-key': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'warn',

    // Enforce component methods order.
    'react/sort-comp': 'off',

    // Static HTML elements do not have semantic meaning. This is clear in the
    // case of `<div>` and `<span>`. It is less so clear in the case of elements
    // that _seem_ semantic, but that do not have a semantic mapping in the
    // accessibility layer. For example `<a>`, `<big>`, `<blockquote>`,
    // `<footer>`, `<picture>`, `<strike>` and `<time>` -- to name a few -- have
    // no semantic layer mapping. They are as void of meaning as `<div>`.
    'jsx-a11y/no-static-element-interactions': 'off',

    // Enforce onClick is accompanied by at least one of the following: onKeyUp,
    // onKeyDown, onKeyPress. Coding for the keyboard is important for users
    // with physical disabilities who cannot use a mouse, AT compatibility, and
    // screenreader users.
    'jsx-a11y/click-events-have-key-events': 'off',

    // Non-interactive HTML elements and non-interactive ARIA roles indicate
    // _content_ and _containers_ in the user interface. A non-interactive
    // element does not support event handlers (mouse and key handlers).
    // Non-interactive elements include `<main>`, `<area>`, `<h1>` (,`<h2>`,
    // etc), `<p>`, `<img>`, `<li>`, `<ul>` and `<ol>`. Non-interactive
    // [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) include
    // `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region`
    // and `tooltip`.
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    // This option limits every line in JSX to one expression each.
    'react/jsx-one-expression-per-line': 'off',

    // Disable so we can add events to anchors whenever we want.
    'jsx-a11y/anchor-is-valid': 'off',

    // Enforce alt property on an img-tag.
    'jsx-a11y/alt-text': 'warn',

    // Enforce the usage of for-attribute on a label-element.
    'jsx-a11y/label-has-for': [
      'warn',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo".
    'jsx-a11y/img-redundant-alt': 'warn',

    // Enforce the usage of autoFocus prop on jsx elements.
    'jsx-a11y/no-autofocus': 'off',

    // Enforce key events with mouse events.
    'jsx-a11y/mouse-events-have-key-events': 'off',

    // Enforce that iframes require a title attribute.
    'jsx-a11y/iframe-has-title': 'warn',

    // Enforce anchors having content for screen readers.
    'jsx-a11y/anchor-has-content': 'off',

    // Enforce that a label tag has a text label and an associated control.
    'jsx-a11y/label-has-associated-control': 'warn',

    // Require that mouseover/out come with focus/blur, for keyboard-only users.
    'jsx-a11y/mouse-events-have-key-events': 'off',

    // Elements with an interactive role and interaction handlers must be focusable.
    'jsx-a11y/interactive-supports-focus': 'off',

    // Enforce that DOM elements without semantic behavior not have interaction handlers.
    'jsx-a11y/no-distracting-elements': 'warn',

    // Ensure <hX> tags have content and are not aria-hidden.
    'jsx-a11y/heading-has-content': 'warn',

    // Require HTML elements to have a "lang" prop.
    'jsx-a11y/html-has-lang': 'warn',

    // NOTE: This has to be 'off' because it has been removed or doesn't work properly.
    'jsx-a11y/href-no-hash': 'off',

    // Disallow the use of JSX in .js files.
    'react/jsx-filename-extension': 'error',

    // Only allowed tabIndex to be declared on interactive elements.
    'jsx-a11y/no-noninteractive-tabindex': 'warn',

    // Ensure captions are used in media.
    'jsx-a11y/media-has-caption': 'off'
  }
};
