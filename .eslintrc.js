module.exports = {
  "extends": [
    "react-app",
    "airbnb"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    // Ensure correct spacing around the arrow in an arrow-function.
    "arrow-spacing": 1,

    // Disallow the usage of the "dangerouslySetInnerHTML" -attribute.
    // This will be set only for this project, since we use Headless Drupal and
    // we have to render some CKEDITOR's content.
    "react/no-danger": 0,

    // Ensure correct code indentation for JSX.
    "react/jsx-indent-props": 1,

    // Ensure no unnecessary braces are used.
    "react/jsx-curly-brace-presence": 1,

    // Prefer attributes without the value when attr={true}.
    "react/jsx-boolean-value" : 1,

    // Ensure closing tag to match indentation of opening of tag.
    "react/jsx-closing-tag-location": 1,

    // Ensure consistent use of file extension within the import path.
    "import/extensions": 2,

    // Require a newline after each call in a method chain.
    "newline-per-chained-call": 1,

    // Require using arrow functions for callbacks.
    "prefer-arrow-callback": 1,

    // Disallow or enforce spaces inside of blocks after opening block and
    // before closing block.
    "block-spacing": 1,

    // Require or disallow newlines around variable declarations.
    "one-var-declaration-per-line": 1,

    // Suggest using const on variables that are never re-assigned.
    "prefer-const": 1,

    // Prefer absolute imports defined before relative imports.
    "import/first": 0,

    // Limiting the maximum of props on a single line (default: 1).
    "react/jsx-max-props-per-line": 1,

    // Ensure correct position of the first property.
    "react/jsx-first-prop-new-line": 0,

    // Disallow wrong indentation.
    "react/jsx-indent": 1,

    "react/jsx-closing-bracket-location": 0,

    // Disallow mutable export variables.
    "import/no-mutable-exports": 0,

    // Disallow dependencies being used in devDependencies.
    "import/no-extraneous-dependencies": 0,

    // Require object literal shorthand syntax.
    "object-shorthand": [0, "never"],

    // Require each propery in object to go on a newline.
    "object-curly-newline": 0,

    // Require the use of parenthesis instead of curly braces when the only line
    // in an arrow function is a return statement.
    "arrow-body-style": 0,

    // Disallow or enforce trailing commas.
    "comma-dangle": [1, "always-multiline"],

    // Prefer default export when only 1 item is being exported in a file.
    "import/prefer-default-export": 1,

    // Disallow assignment in conditional expressions.
    "no-cond-assign": 1,

    // Disallow use of console (off by default in the node environment).
    "no-console": 0,

    // Disallow use of constant expressions in conditions.
    "no-constant-condition": 1,

    // Disallow control characters in regular expressions.
    "no-control-regex": 1,

    "no-continue" : 1,

    // Disallow object as prop type.
    "react/forbid-prop-types": 1,

    // Disallow use of debugger.
    "no-debugger": 1,

    // Disallow duplicate arguments in functions.
    "no-dupe-args": 2,

    // Disallow duplicate keys when creating object literals.
    "no-dupe-keys": 1,

    // Disallow a duplicate case label.
    "no-duplicate-case": 2,

    // Disallow empty statements.
    "no-empty": 1,

    // Disallow the use of empty character classes in regular expressions.
    "no-empty-character-class": 2,

    // Disallow assigning to the exception in a catch block.
    "no-ex-assign": 2,

    // Disallow double-negation boolean casts in a boolean context.
    "no-extra-boolean-cast": 1,

    // Disallow unnecessary semicolons.
    "no-extra-semi": 1,

    // Disallow overwriting functions written as function declarations.
    "no-func-assign": 2,

    // Disallow function or variable declarations in nested blocks.
    "no-inner-declarations": 2,

    // Disallow invalid regular expression strings in the RegExp constructor.
    "no-invalid-regexp": 2,

    // Disallow mixes of different operators.
    "no-mixed-operators": 0,

    // Disallow irregular whitespace outside of strings and comments.
    "no-irregular-whitespace": 2,

    // Disallow negation of the left operand of an in expression.
    "no-negated-in-lhs": 2,

    // Disallow the use of object properties of the global object (Math and
    // JSON) as functions/
    "no-obj-calls": 2,

    // Disallow multiple spaces in a regular expression literal.
    "no-regex-spaces": 1,

    // Disallow sparse arrays.
    "no-sparse-arrays": 2,

    // Disallow unreachable statements after a return, throw, continue, or break
    // statement.
    "no-unreachable": 1,

    // Disallow comparisons with the value NaN.
    "use-isnan": 2,

    // Ensure JSDoc comments are valid (off by default).
    "valid-jsdoc": 1,

    // Ensure that the results of typeof are compared against a valid string.
    "valid-typeof": 2,

    // Enforces return statements in callbacks of array's methods.
    "array-callback-return": 0,

    // Treat var statements as if they were block scoped (off by default). 0:
    // deep destructuring is not compatible
    // https://github.com/eslint/eslint/issues/1863
    "block-scoped-var": 0,

    // Enforce object & array destructuring.
    "prefer-destructuring": 1,

    // Specify the maximum cyclomatic complexity allowed in a program (off by
    // default).
    "complexity": 0,

    // Require return statements to either always or never specify values
    "consistent-return": 0,

    // Specify curly brace conventions for all control statements.
    "curly": 1,

    // Require default case in switch statements (off by default).
    "default-case": 1,

    // Encourages use of dot notation whenever possible.
    "dot-notation": 0,

    // Require the use of === and !==.
    "eqeqeq": 1,

    // Make sure for-in loops have an if statement (off by default).
    "guard-for-in": 0,

    // Disallow the use of alert, confirm, and prompt.
    "no-alert": 1,

    // Disallow use of arguments.caller or arguments.callee.
    "no-caller": 2,

    // Disallow division operators explicitly at beginning of regular expression
    // (off by default).
    "no-div-regex": 0,

    // Disallow else after a return in an if (off by default).
    "no-else-return": 0,

    // Disallow comparisons to null without a type-checking operator (off by
    // default).
    "no-eq-null": 2,

    // Disallow use of eval().
    "no-eval": 2,

    // Disallow adding to native types.
    "no-extend-native": 2,

    // Disallow unnecessary function binding.
    "no-extra-bind": 2,

    // Disallow fallthrough of case statements.
    "no-fallthrough": 2,

    // Disallow the use of leading or trailing decimal points in numeric
    // literals (off by default).
    "no-floating-decimal": 2,

    // Disallow use of eval()-like methods.
    "no-implied-eval": 2,

    // Disallow usage of __iterator__ propertoy.
    "no-iterator": 2,

    // Disallow use of labeled statements.
    "no-labels": 0,

    // Disallow unnecessary nested blocks.
    "no-lone-blocks": 0,

    // Disallow creation of functions within loops.
    "no-loop-func": 2,

    // Disallow use of multiple spaces.
    "no-multi-spaces": 1,

    // Disallow use of multiline strings.
    "no-multi-str": 2,

    // Disallow reassignments of native objects.
    "no-native-reassign": 2,

    // Disallow use of new operator when not part of the assignment or comparison.
    "no-new": 1,

    // Disallow use of new operator for Function object.
    "no-new-func": 2,

    // Disallows creating new instances of String,Number, and Boolean.
    "no-new-wrappers": 2,

    // Disallow use of octal literals.
    "no-octal": 2,

    // Disallow use of octal escape sequences in string literals, such as var
    // foo = "Copyright \251";
    "no-octal-escape": 2,

    // Disallow reassignment of function parameters (off by default).
    "no-param-reassign": 0,

    // Disallow use of process.env (off by default).
    "no-process-env": 0,

    // Disallow usage of __proto__ property.
    "no-proto": 2,

    // disallow declaring the same variable more then once.
    "no-redeclare": 2,

    // Disallow use of assignment in return statement.
    "no-return-assign": 0,

    // Require parens in arrow function arguments.
    "arrow-parens": [1, "always", { "requireForBlockBody": false }],

    // Disallow use of javascript: urls.
    "no-script-url": 2,

    // Disallow comparisons where both sides are exactly the same (off by default).
    "no-self-compare": 2,

    // Disallow use of comma operator.
    "no-sequences": 2,

    // Restrict what can be thrown as an exception (off by default).
    "no-throw-literal": 2,

    // Disallow usage of expressions in statement position.
    "no-unused-expressions": 1,

    // Disallow use of void operator (off by default).
    "no-void": 2,

    // Disallow usage of configurable warning terms in comments": 2, // e.g.
    // TODO or FIXME (off by default)
    "no-warning-comments": [0, {"terms": ["todo", "fixme"], "location": "start"}],

    // Disallow use of the with statement.
    "no-with": 2,

    // Require use of the second argument for parseInt() (off by default).
    "radix": 0,

    // Requires to declare all vars on top of their containing scope (off by default).
    "vars-on-top": 0,

    // Require immediate function invocation to be wrapped in parentheses (off by default).
    "wrap-iife": 2,

    // Require or disallow Yoda conditions.
    "yoda": 1,

    // Controls location of Use Strict Directives.
    // 0: required by `babel-eslint`.
    "strict": 0,

    // Disallow the catch clause parameter name being the same as a variable in
    // the outer scope (off by default in the node environment).
    "no-catch-shadow": 2,

    // Disallow deletion of variables.
    "no-delete-var": 2,

    // Disallow labels that share a name with a variable.
    "no-label-var": 2,

    // Disallow declaration of variables already declared in the outer scope.
    "no-shadow": 0,

    // Disallow shadowing of names such as arguments.
    "no-shadow-restricted-names": 2,

    // Disallow use of undeclared variables unless mentioned in a /*global */ block.
    "no-undef": 2,

    // Disallow use of undefined when initializing variables.
    "no-undef-init": 2,

    // Disallow Use of Chained Assignment Expressions.
    "no-multi-assign": 1,

    // Disallow use of undefined variable (off by default).
    "no-undefined": 2,

    // Disallow declaration of variables that are not used in the code.
    "no-unused-vars": [1, { "args": "none", "ignoreRestSiblings": true }],

    // Disallow use of variables before they are defined.
    "no-use-before-define": [2, { "functions": false, "classes": true, "variables": true }],

    // Disallow specified properties.
    "no-restricted-properties": 1,

    // Disallow specified syntax.
    "no-restricted-syntax": 1,

    // This option sets a specific tab width for your code (off by default).
    "indent": [1, 2, { "SwitchCase": 1 }],

    // Enforce one true brace style (off by default).
    "brace-style": 0,

    // Require camel case names.
    "camelcase": 0,

    // Enforce spacing before and after comma.
    "comma-spacing": [1, {"before": false, "after": true}],

    // Enforce one true comma style (off by default).
    "comma-style": [1, "last"],

    // Enforces consistent naming when capturing the current execution context
    // (off by default).
    "consistent-this": [0, "_this"],

    // Enforce newline at the end of file, with no multiple empty lines.
    "eol-last": 1,

    // Require function expressions to have a name (off by default).
    "func-names": 0,

    // Enforces use of function declarations or expressions (off by default).
    "func-style": [1, "declaration", { "allowArrowFunctions": true }],

    // Enforces spacing between keys and values in object literal properties.
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],

    // Specify the maximum depth callbacks can be nested (off by default)
    "max-nested-callbacks": [1, 5],

    // Require a capital letter for constructors
    "new-cap": [1, {"newIsCap": true, "capIsNew": false}],

    // Disallow the omission of parentheses when invoking a constructor with no
    // arguments.
    "new-parens": 1,

    // Allow or disallow an empty newline after var statement (off by default).
    "newline-after-var": 0,

    // Disallow use of the Array constructor.
    "no-array-constructor": 0,

    // Disallow comments inline after code (off by default).
    "no-inline-comments": 0,

    // Disallow if as the only statement in an else block (off by default).
    "no-lonely-if": 1,

    // Disallow mixed spaces and tabs for indentation.
    "no-mixed-spaces-and-tabs": 1,

    // Disallow multiple empty lines (off by default).
    "no-multiple-empty-lines": [1, {"max": 2}],

    // Disallow nested ternary expressions (off by default).
    "no-nested-ternary": 1,

    // Disallow use of the Object constructor.
    "no-new-object": 0,

    // Disallow space between function identifier and application.
    "no-spaced-func": 1,

    // Disallow the use of ternary operators (off by default).
    "no-ternary": 0,

    // Disallow trailing whitespace at the end of lines.
    "no-trailing-spaces": 1,

    // Disallow dangling underscores in identifiers.
    "no-underscore-dangle": 0,

    // Disallow unnecessary parentheses (off by default).
    "no-extra-parens": 0,

    // Make people use more spaces after block statements instead of blocks
    // being tied together.
    "padding-line-between-statements": [
      1,
      {
        "blankLine": "always",
        "prev": ["block", "block-like", "multiline-block-like"],
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "case",
        "next": "default"
      },
      {
        "blankLine": "any",
        "prev": "*",
        "next": "break"
      },
      {
        "blankLine": "always",
        "prev": ["block", "block-like", "multiline-block-like"],
        "next": "return"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": "*"
      }
    ],

    // Allow just one var statement per function (off by default).
    "one-var": [1, "never"],

    // Require assignment operator shorthand where possible or prohibit it
    // entirely (off by default)
    "operator-assignment": [0, "never"],

    // Enforce that class methods utilize this.
    "class-methods-use-this": 0,

    // Enforce padding within blocks (off by default).
    "padded-blocks": [0, "never"],

    // Require or disallow an empty line between class members.
    "lines-between-class-members": [1, "always"],

    // Require quotes around object literal property names (off by default).
    "quote-props": [1, "as-needed"],

    // Specify whether double or single quotes should be used.
    "quotes": [0, "single"],

    // Require or disallow use of semicolons instead of ASI.
    "semi": [1, "always"],

    // Enforce spacing before and after semicolons.
    "semi-spacing": [1, {"before": false, "after": true}],

    // Sort variables within the same declaration block (off by default).
    "sort-vars": 0,

    // Require a space after certain keywords (off by default).
    "keyword-spacing": [1, { "before": true, "after": true }],

    // Require or disallow space before blocks (off by default).
    "space-before-blocks": [1, "always"],

    // Enforce consistent line breaks inside function parentheses.
    "function-paren-newline": 0,

    // Require or disallow space before function opening parenthesis (off by default).
    "space-before-function-paren": [1, {"anonymous": "never", "named": "never"}],

    // Require or disallow spaces inside object.
    "object-curly-spacing": [1, "always"],

    // Require or disallow spaces inside arrays.
    "array-bracket-spacing": [1, "never"],

    // Require or disallow spaces inside arrays/object inside each other.
    "computed-property-spacing": [1, "never"],

    // Require or disallow spaces inside parentheses (off by default).
    "space-in-parens": [1, "never"],

    // Require spaces around operators.
    "space-infix-ops": 1,

    // Require or disallow spaces before/after unary operators (words on by
    // default, nonwords off by default).
    "space-unary-ops": [1, {"words": true, "nonwords": false}],

    // Require or disallow a space immediately following the // in a line
    // comment (off by default).
    "spaced-comment": [1, "always"],

    // Require regex literals to be wrapped in parentheses (off by default).
    "wrap-regex": 0,

    // Require let or const instead of var (off by default).
    "no-var": 2,

    // Enforce the spacing around the * in generator functions (off by default).
    "generator-star-spacing": [2, "before"],

    // Specify the maximum depth that blocks can be nested (off by default).
    "max-depth": [1, 4],

    // Specify the maximum length of a line in your program (off by default).
    "max-len": [0, 80, 2],

    // Limits the number of parameters that can be used in the function
    // declaration (off by default).
    "max-params": [0, 99],

    // Specify the maximum number of statement allowed in a function (off by default).
    "max-statements": 0,

    // Disallow use of bitwise operators (off by default).
    "no-bitwise": 0,

    // Disallow use of unary operators, ++ and -- (off by default).
    "no-plusplus": 0,

    // Prevent missing displayName in a React component definition.
    "react/display-name": 0,

    // Require a space before the closing tag.
    "react/jsx-tag-spacing": 1,

    // Enforce quote style for JSX attributes.
    "jsx-quotes": [1, "prefer-double"],

    // Disallow undeclared variables in JSX.
    "react/jsx-no-undef": 2,

    // Enforce props alphabetical sorting.
    "react/jsx-sort-props": 0,

    // Prevent React to be incorrectly marked as unused.
    "react/jsx-uses-react": 2,

    // Enforce stateless React Components to be written as a pure function.
    "react/prefer-stateless-function": 0,

    // Prevent variables used in JSX to be incorrectly marked as unused.
    "react/jsx-uses-vars": 2,

    // Prevent function binding outside of the constructor.
    "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],

    // Prevent usage of setState in componentDidMount.
    "react/no-did-mount-set-state": 1,

    // Prevent usage of setState in componentDidUpdate.
    "react/no-will-update-set-state": 1,

    // Prevent usage of setState in componentDidUpdate.
    "react/no-did-update-set-state": 1,

    // Prevent multiple component definition per file.
    "react/no-multi-comp": 0,

    // Prevent usage of unknown DOM property.
    "react/no-unknown-property": 1,

    // Prevent missing props validation in a React component definition.
    "react/prop-types": 0,

    // Prevent missing React when using JSX.
    "react/react-in-jsx-scope": 2,

    // Prevent extra closing tags for components without children.
    "react/self-closing-comp": 1,

    // Prevent missing parentheses around multilines JSX.
    "react/jsx-wrap-multilines": 1,

    // Prevent that an element uses an Array index in its key property.
    "react/no-array-index-key": 0,

    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": 1,

    // Enforce component methods order.
    "react/sort-comp": 0,

    // Allow interaction for static elements.
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,

    // Disable so we can add events to anchors whenever we want.
    "jsx-a11y/anchor-is-valid": 0,

    // Enforce alt property on an img-tag.
    "jsx-a11y/alt-text": 1,

    // Enforce the usage of for-attribute on a label-element.
    "jsx-a11y/label-has-for": 1,

    // Enforce the usage of autoFocus prop on jsx elements.
    "jsx-a11y/no-autofocus": 0,

    // Enforce key events with mouse events.
    "jsx-a11y/mouse-events-have-key-events": 0,

    // Enforce that iframes require a title attribute.
    "jsx-a11y/iframe-has-title": 1,

    // Enforce anchors having content for screen readers.
    "jsx-a11y/anchor-has-content": 0,

    // NOTE: This has to be 0 because it has been removed or doesn't work properly.
    "jsx-a11y/href-no-hash": 0,

    // Ensure captions are used in media.
    "jsx-a11y/media-has-caption": 0,
  }
};
