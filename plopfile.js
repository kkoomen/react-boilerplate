module.exports = function(plop) {
  plop.setGenerator('React Component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the component to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the component to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ connected, stateless }) => {
      const actions = [];

      if (connected && stateless) {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.jsx',
          templateFile: './config/plop/component/index.stateless.connected.jsx.plop',
        });
      } else if (connected) {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.jsx',
          templateFile: './config/plop/component/index.connected.jsx.plop',
        });
      }
      else if (stateless) {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.jsx',
          templateFile: './config/plop/component/index.stateless.unconnected.jsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.jsx',
          templateFile: './config/plop/component/index.unconnected.jsx.plop',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('React Container', {
    description: 'Create a new React container, serving as the root component of the page.',
    prompts: [
      {
        type: 'prompt',
        name: 'containerName',
        message: 'Name of your container:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the container to be connected to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the container to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ connected, stateless }) => {
      const actions = [];

      if (connected && stateless) {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.jsx',
          templateFile: './config/plop/container/index.stateless.connected.jsx.plop',
        });
      } else if (connected) {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.jsx',
          templateFile: './config/plop/container/index.connected.jsx.plop',
        });
      }
      else if (stateless) {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.jsx',
          templateFile: './config/plop/container/index.stateless.unconnected.jsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.jsx',
          templateFile: './config/plop/container/index.unconnected.jsx.plop',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('Redux Reducer', {
    description: 'Generate a new Redux reducer (including an example action)',
    prompts: [
      {
        type: 'prompt',
        name: 'reducerName',
        message: 'Name of your reducer (e.g. "Calendar Event" or "Vehicle")',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: './src/actions/{{pascalCase reducerName}}/index.js',
          templateFile: './config/plop/action/index.js.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/index.js',
          templateFile: './config/plop/reducer/index.js.plop',
        },
      ];

      return actions;
    },
  });
};
