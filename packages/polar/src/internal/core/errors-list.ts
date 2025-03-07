export const ERROR_PREFIX = 'PE';

export interface ErrorDescriptor {
  number: number
  // Message can use templates. See applyErrorMessageTemplate
  message: string
  // Title and description can be Markdown
  title: string
  description: string
  shouldBeReported: boolean
}

export function getErrorCode (error: ErrorDescriptor): string {
  return `${ERROR_PREFIX}${error.number}`;
}

export const ERRORS = {
  GENERAL: {
    NOT_INSIDE_PROJECT: {
      number: 1,
      message: 'You are not inside a Polar project.',
      title: 'You are not inside a Polar project',
      description: `You are trying to run Polar outside of a Polar project.

You can learn how to use Polar by reading the [Getting Started guide](../getting-started).`,
      shouldBeReported: false
    },
    INVALID_NODE_VERSION: {
      number: 2,
      message:
        "Polar doesn't support your Node.js version. It should be %requirement%.",
      title: 'Unsupported Node.js',
      description: `Polar doesn't support your Node.js version.

Please upgrade your version of Node.js and try again.`,
      shouldBeReported: false
    },
    UNSUPPORTED_OPERATION: {
      number: 3,
      message: '%operation% is not supported in Polar.',
      title: 'Unsupported operation',
      description: `You are tying to perform an unsupported operation.

Unless you are creating a task or plugin, this is probably a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    CONTEXT_ALREADY_CREATED: {
      number: 4,
      message: 'PolarContext is already created.',
      title: 'Polar was already initialized',
      description: `Polar initialization was executed twice. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    CONTEXT_NOT_CREATED: {
      number: 5,
      message: 'PolarContext is not created.',
      title: "Polar wasn't initialized",
      description: `Polar initialization failed. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    CONTEXT_PRE_NOT_DEFINED: {
      number: 6,
      message:
        'Polar Runtime Environment is not defined in the PolarContext.',
      title: 'Polar Runtime Environment not created',
      description: `Polar initialization failed. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    CONTEXT_PRE_ALREADY_DEFINED: {
      number: 7,
      message:
        'Polar Runtime Environment is already defined in the PolarContext',
      title: 'Tried to create the Polar Runtime Environment twice',
      description: `The Polar initialization process was executed twice. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    INVALID_CONFIG: {
      number: 8,
      message: `There's one or more errors in your config file:

%errors%

To learn more about Polar's configuration, please go to https://polar.dev/config/`,
      title: 'Invalid Polar config',
      description: `You have one or more errors in your config file.

Check the error message for details, or go to [documentation](https://polar.dev/config/) to learn more.`,
      shouldBeReported: false
    },
    LIB_IMPORTED_FROM_THE_CONFIG: {
      number: 9,
      message: `Error while loading Polar's configuration.
You probably imported Polar instead of Polar/config`,
      title: 'Failed to load config file',
      description: `There was an error while loading your config file.

The most common source of errors is trying to import \`Polar\` instead of \`Polar/config\`.

Please make sure your config file is correct.`,
      shouldBeReported: false
    },
    USER_CONFIG_MODIFIED: {
      number: 10,
      message: `Error while loading Polar's configuration.
You or one of your plugins is trying to modify the userConfig.%path% value from a config extender`,
      title: "Attempted to modify the user's config",
      description: `An attempt to modify the user's config was made.

This is probably a bug in one of your plugins.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    ASSERTION_ERROR: {
      number: 11,
      message: 'An internal invariant was violated: %message%',
      title: 'Invariant violation',
      description: `An internal invariant was violated.
This is probably caused by a programming error in Polar or in one of the used plugins.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    NON_LOCAL_INSTALLATION: {
      number: 12,
      message:
        'Trying to use a non-local installation of Polar, which is not supported.\nPlease install Polar locally using npm or Yarn, and try again.',
      title: 'Polar is not installed or installed globally',
      description: `You tried to run Polar from a global installation or not installing it at all. This is not supported.

Please install Polar locally using npm or Yarn, and try again.`,
      shouldBeReported: false
    },
    TS_NODE_NOT_INSTALLED: {
      number: 13,
      message: `Your Polar project uses typescript, but ts-node is not installed.

Please run: npm install --save-dev ts-node`,
      title: 'ts-node not installed',
      description: `You are running a Polar project that uses typescript, but you haven't installed ts-node.

Please run this and try again: npm install --save-dev ts-node`,
      shouldBeReported: false
    },
    TYPESCRIPT_NOT_INSTALLED: {
      number: 14,
      message: `Your Polar project uses typescript, but it's not installed.

Please run: npm install --save-dev typescript`,
      title: 'typescript not installed',
      description: `You are running a Polar project that uses typescript, but it's not installed.

Please run this and try again: npm install --save-dev typescript`,
      shouldBeReported: false
    },
    BAD_SURI: {
      number: 15,
      message: `Can't parse suri "%uri%"`,
      title: 'BAD SURI',
      description: `The account cannot be imported from this suri.

Please check that the configured accounts are correct.`,
      shouldBeReported: false
    },
    BAD_KEYPAIR: {
      number: 16,
      message: `Cannot import keypair`,
      title: 'BAD KEYPAIR',
      description: `The keypair cannot be imported.

Please check that the configured keypair are correct.`,
      shouldBeReported: false
    },
    INIT_INSIDE_PROJECT: {
      number: 17,
      message: "Polar project file was detected: '%clashingFile%'. Move the file or use an empty directory.",
      title: "Directory contains a polar file",
      description: `You are trying to run Polar in a directory that contains polar project file.`,
      shouldBeReported: false
    }
  },
  NETWORK: {
    CONFIG_NOT_FOUND: {
      number: 100,
      message: "Network %network% doesn't exist",
      title: "Selected network doesn't exist",
      description: `You are trying to run Polar with a non-existent network.

Read the [documentation](https://Polar.org/config/#networks-configuration) to learn how to define custom networks.`,
      shouldBeReported: false
    },
    INVALID_GLOBAL_CHAIN_ID: {
      number: 101,
      message:
        'Polar was set to use chain id %configChainId%, but connected to a chain with id %connectionChainId%.',
      title: 'Connected to the wrong network',
      description: `Your config specifies a chain id for the network you are trying to used, but Polar detected anotherone.

Please make sure you are setting your config correctly.`,
      shouldBeReported: false
    },
    ETHSIGN_MISSING_DATA_PARAM: {
      number: 102,
      message: 'Missing "data" param when calling eth_sign.',
      title: 'Missing `data` param when calling eth_sign.',
      description: `You called \`eth_sign\` with incorrect parameters.

Please check that you are sending a \`data\` parameter.`,
      shouldBeReported: false
    },
    NOT_LOCAL_ACCOUNT: {
      number: 103,
      message:
        'Account %account% is not managed by the node you are connected to.',
      title: 'Unrecognized account',
      description: `You are trying to send a transaction or sign some data with an
account not managed by your Ethereum node nor Polar.

Please double check your accounts and the \`from\` parameter in your RPC calls.`,
      shouldBeReported: false
    },
    MISSING_TX_PARAM_TO_SIGN_LOCALLY: {
      number: 104,
      message: 'Missing param %param% from a tx being signed locally.',
      title: 'Missing transaction parameter',
      description: `You are trying to send a transaction with a locally managed
account, and some parameters are missing.

Please double check your transactions' parameters.`,
      shouldBeReported: false
    },
    NO_REMOTE_ACCOUNT_AVAILABLE: {
      number: 105,
      message:
        'No local account was set and there are accounts in the remote node.',
      title: 'No remote accounts available',
      description: `No local account was set and there are accounts in the remote node.

Please make sure that your Ethereum node has unlocked accounts.`,
      shouldBeReported: false
    },
    INVALID_HD_PATH: {
      number: 106,
      message:
        'HD path %path% is invalid. Read about BIP32 to know about the valid forms.',
      title: 'Invalid HD path',
      description: `An invalid HD/BIP32 derivation path was provided in your config.

Read the [documentation](https://Polar.org/config/#hd-wallet-config) to learn how to define HD accounts correctly.`,
      shouldBeReported: false
    },
    INVALID_RPC_QUANTITY_VALUE: {
      number: 107,
      message:
        "Received invalid value `%value%` from/to the node's JSON-RPC, but a Quantity was expected.",
      title: 'Invalid JSON-RPC value',
      description: `One of your transactions sent or received an invalid JSON-RPC QUANTITY value.

Please double check your calls' parameters and keep your Ethereum node up to date.`,
      shouldBeReported: false
    },
    NODE_IS_NOT_RUNNING: {
      number: 108,
      message: `Cannot connect to the network %network%.
Please make sure your node is running, and check your internet connection and networks config`,
      title: 'Cannot connect to the network',
      description: `Cannot connect to the network.

Please make sure your node is running, and check your internet connection and networks config.`,
      shouldBeReported: false
    },
    NETWORK_TIMEOUT: {
      number: 109,
      message: `Network connection timed-out.
Please check your internet connection and networks config`,
      title: 'Network timeout',
      description: `One of your JSON-RPC requests timed-out.

Please make sure your node is running, and check your internet connection and networks config.`,
      shouldBeReported: false
    },
    INVALID_JSON_RESPONSE: {
      number: 110,
      message: 'Invalid JSON-RPC response received: %response%',
      title: 'Invalid JSON-RPC response',
      description: `One of your JSON-RPC requests received an invalid response.

Please make sure your node is running, and check your internet connection and networks config.`,
      shouldBeReported: false
    },
    CANT_DERIVE_KEY: {
      number: 111,
      message:
        "Cannot derive key %path% from mnemonic '%mnemonic%.\nTry using another mnemonic or deriving less keys.",
      title: 'Could not derive an HD key',
      description: `One of your HD keys could not be derived.

Try using another mnemonic or deriving less keys.`,
      shouldBeReported: false
    }
  },
  TASK_DEFINITIONS: {
    PARAM_AFTER_VARIADIC: {
      number: 200,
      message:
        'Could not set positional param %paramName% for task %taskName% because there is already a variadic positional param and it has to be the last positional one.',
      title: 'Could not add positional param',
      description: `Could add a positional param to your task because
there is already a variadic positional param and it has to be the last
positional one.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    PARAM_ALREADY_DEFINED: {
      number: 201,
      message:
        'Could not set param %paramName% for task %taskName% because its name is already used.',
      title: 'Repeated param name',
      description: `Could not add a param to your task because its name is already used.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    PARAM_CLASHES_WITH_POLAR_PARAM: {
      number: 202,
      message:
        'Could not set param %paramName% for task %taskName% because its name is used as a param for Polar.',
      title: 'Polar and task param names clash',
      description: `Could not add a param to your task because its name is used as a param for Polar.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    MANDATORY_PARAM_AFTER_OPTIONAL: {
      number: 203,
      message:
        'Could not set param %paramName% for task %taskName% because it is mandatory and it was added after an optional positional param.',
      title: 'Optional param followed by a required one',
      description: `Could not add param to your task because it is required and it was added after an optional positional param.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    ACTION_NOT_SET: {
      number: 204,
      message: 'No action set for task %taskName%.',
      title: 'Tried to run task without an action',
      description: `A task was run, but it has no action set.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    RUNSUPER_NOT_AVAILABLE: {
      number: 205,
      message:
        'Tried to call runSuper from a non-overridden definition of task %taskName%',
      title: '`runSuper` not available',
      description: `You tried to call \`runSuper\` from a non-overridden task.

Please use \`runSuper.isDefined\` to make sure that you can call it.`,
      shouldBeReported: false
    },
    DEFAULT_VALUE_WRONG_TYPE: {
      number: 206,
      message:
        "Default value for param %paramName% of task %taskName% doesn't match the default one, try specifying it.",
      title: 'Default value has incorrect type',
      description: `One of your tasks has a parameter whose default value doesn't match the expected type.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    DEFAULT_IN_MANDATORY_PARAM: {
      number: 207,
      message:
        "Default value for param %paramName% of task %taskName% shouldn't be set.",
      title: 'Required parameter has a default value',
      description: `One of your tasks has a required parameter with a default value.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    INVALID_PARAM_NAME_CASING: {
      number: 208,
      message:
        'Invalid param name %paramName% in task %taskName%. Param names must be camelCase.',
      title: 'Invalid casing in parameter name',
      description: `Your parameter names must use camelCase.

Please double check your task definitions.`,
      shouldBeReported: false
    },
    OVERRIDE_NO_MANDATORY_PARAMS: {
      number: 209,
      message:
        'Redefinition of task %taskName% failed. Unsupported operation adding mandatory (non optional) param definitions in an overridden task.',
      title: 'Attempted to add mandatory params to an overridden task',
      description: `You can't add mandatory (non optional) param definitions in an overridden task.
The only supported param additions for overridden tasks are flags,
and optional params.

Please, double check your task definitions.`,
      shouldBeReported: false
    },
    OVERRIDE_NO_POSITIONAL_PARAMS: {
      number: 210,
      message:
        'Redefinition of task %taskName% failed. Unsupported operation adding positional param definitions in an overridden task.',
      title: 'Attempted to add positional params to an overridden task',
      description: `You can't add positional param definitions in an overridden task.
The only supported param additions for overridden tasks are flags,
and optional params.

Please, double check your task definitions.`,
      shouldBeReported: false
    },
    OVERRIDE_NO_VARIADIC_PARAMS: {
      number: 211,
      message:
        'Redefinition of task %taskName% failed. Unsupported operation adding variadic param definitions in an overridden task.',
      title: 'Attempted to add variadic params to an overridden task',
      description: `You can't add variadic param definitions in an overridden task.
The only supported param additions for overridden tasks are flags,
and optional params.

Please, double check your task definitions.`,
      shouldBeReported: false
    },
    CLI_ARGUMENT_TYPE_REQUIRED: {
      number: 212,
      title: 'Invalid argument type',
      message:
        'Task %task% is not a subtask but one of its arguments uses the type %type%, which is not parseable.',
      description: `Tasks that can be invoked from the command line require CLIArgumentType types for their arguments.

What makes these types special is that they can be represented as strings, so you can write them down in the terminal.`,
      shouldBeReported: false
    }
  },
  ARGUMENTS: {
    INVALID_ENV_VAR_VALUE: {
      number: 300,
      message: "Invalid environment variable %varName%'s value: %value%",
      title: 'Invalid environment variable value',
      description: `You are setting one of Polar arguments using an environment variable, but it has an incorrect value.

Please double check your environment variables.`,
      shouldBeReported: false
    },
    INVALID_VALUE_FOR_TYPE: {
      number: 301,
      message: 'Invalid value %value% for argument %name% of type %type%',
      title: 'Invalid argument type',
      description: `One of your Polar or task's arguments has an invalid type.

Please double check your arguments.`,
      shouldBeReported: false
    },
    INVALID_INPUT_FILE: {
      number: 302,
      message:
        "Invalid argument %name%: File %value% doesn't exist or is not a readable file.",
      title: 'Invalid file argument',
      description: `One of your tasks expected a file as an argument, but you provided a
non-existent or non-readable file.

Please double check your arguments.`,
      shouldBeReported: false
    },
    UNRECOGNIZED_TASK: {
      number: 303,
      message: 'Unrecognized task %task%',
      title: 'Unrecognized task',
      description: `Tried to run a non-existent task.

Please double check the name of the task you are trying to run.`,
      shouldBeReported: false
    },
    UNRECOGNIZED_COMMAND_LINE_ARG: {
      number: 304,
      message:
        'Unrecognised command line argument %argument%.\nNote that task arguments must come after the task name.',
      title: 'Unrecognized command line argument',
      description: `Polar couldn't recognize one of your command line arguments.

This may be because you are writing it before the task name. It should come after it.

Please double check how you invoked Polar.`,
      shouldBeReported: false
    },
    UNRECOGNIZED_PARAM_NAME: {
      number: 305,
      message: 'Unrecognized param %param%',
      title: 'Unrecognized param',
      description: `Polar couldn't recognize one of your tasks' parameters.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    MISSING_TASK_ARGUMENT: {
      number: 306,
      message: 'Missing task argument %param%',
      title: 'Missing task argument',
      description: `You tried to run a task, but one of its required arguments was missing.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    MISSING_POSITIONAL_ARG: {
      number: 307,
      message: 'Missing positional argument %param%',
      title: 'Missing task positional argument',
      description: `You tried to run a task, but one of its required arguments was missing.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    UNRECOGNIZED_POSITIONAL_ARG: {
      number: 308,
      message: 'Unrecognized positional argument %argument%',
      title: 'Unrecognized task positional argument',
      description: `You tried to run a task with more positional arguments than needed.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    REPEATED_PARAM: {
      number: 309,
      message: 'Repeated parameter %param%',
      title: 'Repeated task parameter',
      description: `You tried to run a task with a repeated parameter.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    PARAM_NAME_INVALID_CASING: {
      number: 310,
      message: 'Invalid param %param%. Command line params must be lowercase.',
      title: 'Invalid casing in command line parameter',
      description: `You tried to run Polar with a parameter with invalid casing. They must be lowercase.

Please double check how you invoked Polar.`,
      shouldBeReported: false
    },
    INVALID_JSON_ARGUMENT: {
      number: 311,
      message: 'Error parsing JSON value for argument %param%: %error%',
      title: 'Invalid JSON parameter',
      description: `You tried to run a task with an invalid JSON parameter.

Please double check how you invoked Polar or run your task.`,
      shouldBeReported: false
    },
    RUNNING_SUBTASK_FROM_CLI: {
      number: 312,
      title: 'Subtask run from the command line',
      message: 'Trying to run the %name% subtask from the CLI',
      description: `You tried to run an subtask from the command line.

This is not supported. Please run the help task to see the available options.`,
      shouldBeReported: false
    }
  },
  RESOLVER: {
    FILE_NOT_FOUND: {
      number: 400,
      message: "File %file% doesn't exist.",
      title: 'Solidity file not found',
      description: `Tried to resolve a non-existing Solidity file as an entry-point.`,
      shouldBeReported: false
    },
    LIBRARY_NOT_INSTALLED: {
      number: 401,
      message: 'Library %library% is not installed.',
      title: 'Solidity library not installed',
      description: `One of your Solidity sources imports a library that is not installed.

Please double check your imports or install the missing dependency.`,
      shouldBeReported: false
    },
    LIBRARY_FILE_NOT_FOUND: {
      number: 402,
      message: "File %file% doesn't exist.",
      title: 'Missing library file',
      description: `One of your libraries' files was imported but doesn't exist.

Please double check your imports or update your libraries.`,
      shouldBeReported: false
    },
    ILLEGAL_IMPORT: {
      number: 403,
      message: 'Illegal import %imported% from %from%',
      title: 'Illegal Solidity import',
      description: `One of your libraries tried to use a relative import to import a file outside of its scope.

This is disabled for security reasons.`,
      shouldBeReported: false
    },
    IMPORTED_FILE_NOT_FOUND: {
      number: 404,
      message: 'File %imported%, imported from %from%, not found.',
      title: 'Imported file not found',
      description: `One of your source files imported a non-existing one.

Please double check your imports.`,
      shouldBeReported: false
    },
    INVALID_IMPORT_BACKSLASH: {
      number: 405,
      message:
        'Invalid import %imported% from %from%. Imports must use / instead of \\, even in Windows',
      title: 'Invalid import: use / instead of \\',
      description: `A Solidity file is trying to import another one with its relative path and is using backslashes (\\) insteado of slashes (/).

You must always use slashes (/) in Solidity imports.`,
      shouldBeReported: false
    },
    INVALID_IMPORT_PROTOCOL: {
      number: 406,
      message:
        "Invalid import %imported% from %from%. Polar doesn't support imports via %protocol%.",
      title: 'Invalid import: trying to use an unsupported protocol',
      description: `A Solidity file is trying to import another one using an unsupported protocol, like http.

You can only import files thar are available locally or installed through npm.`,
      shouldBeReported: false
    },
    INVALID_IMPORT_ABSOLUTE_PATH: {
      number: 407,
      message:
        "Invalid import %imported% from %from%. Polar doesn't support imports with absolute paths.",
      title: 'Invalid import: absolute paths unsupported',
      description: `A Solidity file is trying to import another one using its absolute path.

This is not supported, as it would lead to hard to reproduce compilations.`,
      shouldBeReported: false
    },
    INVALID_IMPORT_OUTSIDE_OF_PROJECT: {
      number: 408,
      message:
        'Invalid import %imported% from %from%. The file being imported is outside of the project',
      title: 'Invalid import: file outside of the project',
      description: `A Solidity file is trying to import another one that is outside of the project.

This is not supported by Polar.`,
      shouldBeReported: false
    },
    INVALID_IMPORT_WRONG_CASING: {
      number: 409,
      message:
        'Trying to import %imported% from %from%, but it has an incorrect casing.',
      title: 'Invalid import: wrong file casing',
      description: `A Solidity file is trying to import another one but its source name casing was wrong.

Polar's compiler is case sensitive to ensure projects are portable across different operating systems.`,
      shouldBeReported: false
    },
    WRONG_SOURCE_NAME_CASING: {
      number: 410,
      message:
        'Trying to resolve the file %incorrect% but its correct case-sensitive name is %correct%',
      title: 'Incorrect source name casing',
      description: `You tried to resolve a Solidity file with an incorrect casing.

Polar's compiler is case sensitive to ensure projects are portable across different operating systems.`,
      shouldBeReported: false
    },
    IMPORTED_LIBRARY_NOT_INSTALLED: {
      number: 411,
      message:
        'The library %library%, imported from %from%, is not installed. Try installing it using npm.',
      title: 'Invalid import: library not installed',
      description: `A Solidity file is trying to import another which belongs to a library that is not installed.

Try installing the library using npm.`,
      shouldBeReported: false
    }
  },
  SOLC: {
    INVALID_VERSION: {
      number: 500,
      message:
        "Solidity version %version% is invalid or hasn't been released yet.",
      title: 'Invalid `solc` version',
      description: `The Solidity version in your config is invalid or hasn't been released yet.

Please double check your \`solc\` config.`,
      shouldBeReported: false
    },
    DOWNLOAD_FAILED: {
      number: 501,
      message:
        "Couldn't download compiler version %remoteVersion%. Please check your connection.",
      title: '`solc` download failed',
      description: `Couldn't download \`solc\`.

Please check your Internet connection.`,
      shouldBeReported: false
    },
    VERSION_LIST_DOWNLOAD_FAILED: {
      number: 502,
      message:
        "Couldn't download compiler versions list. Please check your connection.",
      title: "Couldn't obtain `solc` version list",
      description: `Couldn't download \`solc\`'s version list.

Please check your Internet connection.`,
      shouldBeReported: false
    },
    INVALID_DOWNLOAD: {
      number: 503,
      message:
        "Couldn't download compiler version %remoteVersion%. Checksum verification failed. Please check your connection.",
      title: 'Downloaded `solc` checksum verification failed',
      description: `Downloaded \`solc\` verification failed..

Please check your Internet connection.`,
      shouldBeReported: false
    },
    CANT_GET_COMPILER: {
      number: 504,
      message: "The solc compiler couldn't be obtained for version %version%",
      title: "The solc compiler couldn't be obtained",
      description: `Polar couldn't obtain a valid solc compiler.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    }
  },
  BUILTIN_TASKS: {
    COMPILE_FAILURE: {
      number: 600,
      message: 'Compilation failed',
      title: 'Compilation failed',
      description: `Your smart contracts failed to compile.

Please check Polar's output for more details.`,
      shouldBeReported: false
    },
    RUN_FILE_NOT_FOUND: {
      number: 601,
      message: "Script %script% doesn't exist.",
      title: "Script doesn't exist",
      description: `Tried to use \`Polar run\` to execut a non-existing script.

Please double check your script's path`,
      shouldBeReported: false
    },
    RUN_SCRIPT_ERROR: {
      number: 602,
      message: 'Error running script {%script%}: %error%',
      title: 'Error running script',
      description: `Running a script resulted in an error.

Please check Polar's output for more details.`,
      shouldBeReported: false
    },
    FLATTEN_CYCLE: {
      number: 603,
      message: "Polar flatten doesn't support cyclic dependencies.",
      title: 'Flatten detected cyclic dependencies',
      description: `Polar flatten doesn't support cyclic dependencies.

We recommend not using this kind of dependencies.`,
      shouldBeReported: false
    },
    JSONRPC_SERVER_ERROR: {
      number: 604,
      message: 'Error running JSON-RPC server: %error%',
      title: 'Error running JSON-RPC server',
      description: `There was error while starting the JSON-RPC HTTP server.`,
      shouldBeReported: false
    },
    JSONRPC_UNSUPPORTED_NETWORK: {
      number: 605,
      message:
        'Unsupported network for JSON-RPC server. Only Polar is currently supported.',
      title: 'Unsupported network for JSON-RPC server.',
      description: `JSON-RPC server can only be started when running the Polar Network.

To start the JSON-RPC server, retry the command without the --network parameter.`,
      shouldBeReported: false
    },
    COMPILATION_JOBS_CREATION_FAILURE: {
      number: 606,
      message: `The project cannot be compiled, see reasons below.

%reasons%`,
      title: 'The project cannot be compiled',
      description: `The project cannot be compiled with the current settings.`,
      shouldBeReported: false
    },
    NODE_FORK_BLOCK_NUMBER_WITHOUT_URL: {
      number: 607,
      message: `You specified a fork block number but not an URL.`,
      title: 'Missing fork URL',
      description: `You passed a block number to fork from, but not URL. Polar cannot fork
if the URL of the JSON-RPC weren't set.`,
      shouldBeReported: false
    },
    INK_ENV_ERROR: {
      number: 608,
      message: `The cargo contract should be installed correctly and the version should be at least %version%.`,
      title: 'Ink env error',
      description: `Run the following command to install cargo-contract:
\`$ cargo install cargo-contract --force --locked\`,
or go to [cargo-contract](https://github.com/paritytech/cargo-contract) to learn more.`,
      shouldBeReported: false
    },
    SOLANG_ENV_ERROR: {
      number: 609,
      message: `The solang should be installed correctly.`,
      title: 'Ink env error',
      description: `Run the following command to install cargo-contract:
\`$ cargo install solang  --force --locked\`,
or go to [solang](https://solang.readthedocs.io/en/latest/installing.html) to learn more.`,
      shouldBeReported: false
    },
    INK_NOT_FOUND_ARTIFACT: {
      number: 610,
      message: `Ink compiles successfully, but Polar cannot find the compiled artifact.`,
      title: 'Ink not found arifacts',
      description: `If you think this is a bug in Polar, please report it here: https://github.com/patractlabs/Polar/issues/new`,
      shouldBeReported: false
    },
    INK_DUPLICATE_NAME: {
      number: 611,
      message: `The contract names of %path1% and %path2% conflict.`,
      title: 'Ink duplicate contract name',
      description: `Rename contract name in Cargo.toml to fix this.`,
      shouldBeReported: false
    }
  },
  ARTIFACTS: {
    NOT_FOUND: {
      number: 700,
      message: 'Artifact for contract "%contractName%" not found.',
      title: 'Artifact not found',
      description: `Tried to import a non-existing artifact.

Please double check that your contracts have been compiled and your artifact's name.`,
      shouldBeReported: false
    },
    MULTIPLE_FOUND: {
      number: 701,
      message: `There are multiple artifacts for contract "%contractName%", please use a fully qualified name.

Please replace %contractName% for one of these options wherever you are trying to read its artifact:

%candidates%
`,
      title: 'Multiple artifacts found',
      description: `There are multiple artifacts that match the given contract name, and Polar doesn't know which one to use.

Please use the fully qualified name of the contract to disambiguate it.`,
      shouldBeReported: false
    },
    WRONG_CASING: {
      number: 702,
      message:
        'Invalid artifact path %incorrect%, its correct case-sensitive path is %correct%',
      title: 'Incorrect artifact path casing',
      description: `You tried to get an artifact file with an incorrect casing.

Polar's artifact resolution is case sensitive to ensure projects are portable across different operating systems.`,
      shouldBeReported: true
    }
  },
  PLUGINS: {
    NOT_INSTALLED: {
      number: 800,
      message: `Plugin %plugin% is not installed.
  %extraMessage%Please run: npm install --save-dev%extraFlags% %plugin%`,
      title: "Plugin not installed",
      description: `You are trying to use a plugin that hasn't been installed.
  
  Please follow polar's instructions to resolve this.`,
      shouldBeReported: false
    },
    MISSING_DEPENDENCIES: {
      number: 801,
      message: `Plugin %plugin% requires the following dependencies to be installed: %missingDependencies%.
Please run: npm install --save-dev %missingDependenciesVersions%`,
      title: 'Plugin dependencies not installed',
      description: `You are trying to use a plugin with unmet dependencies.

Please follow Polar's instructions to resolve this.`,
      shouldBeReported: false
    },
    DEPENDENCY_VERSION_MISMATCH: {
      number: 802,
      message: `Plugin %plugin% requires %dependency% version %versionSpec% but got %installedVersion%.
  %extraMessage%If you haven't installed %dependency% manually, please run: npm install --save-dev%extraFlags% "%dependency%@%versionSpec%"
  If you have installed %dependency% yourself, please reinstall it with a valid version.`,
      title: "Plugin dependencies's version mismatch",
      description: `You are trying to use a plugin that requires a different version of one of its dependencies.
  
  Please follow polar's instructions to resolve this.`,
      shouldBeReported: false
    },
    OLD_STYLE_IMPORT_DETECTED: {
      number: 803,
      message: `You are trying to load %pluginNameText% with a require or import statement.
  Please replace it with a call to usePlugin("%pluginNameCode%").`,
      title: "Importing a plugin with `require`",
      description: `You are trying to load a plugin with a call to \`require\`.
  
  Please use \`usePlugin(npm-plugin-package)\` instead.`,
      shouldBeReported: false
    }
  },
  INTERNAL: {
    TEMPLATE_INVALID_VARIABLE_NAME: {
      number: 900,
      message:
        'Variable names can only include ascii letters and numbers, and start with a letter, but got %variable%',
      title: 'Invalid error message template',
      description: `An error message template contains an invalid variable name. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    TEMPLATE_VALUE_CONTAINS_VARIABLE_TAG: {
      number: 901,
      message:
        "Template values can't include variable tags, but %variable%'s value includes one",
      title: 'Invalid error message replacement',
      description: `Tried to replace an error message variable with a value that contains another variable name. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    TEMPLATE_VARIABLE_TAG_MISSING: {
      number: 902,
      message: "Variable %variable%'s tag not present in the template",
      title: 'Missing replacement value from error message template',
      description: `An error message template is missing a replacement value. This is a bug.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    },
    WRONG_ARTIFACT_PATH: {
      number: 903,
      message:
        "The inferred artifact path for contract %contractName% is %artifactPath%, but this file doesn't exist",
      title: "Inferred artifact path doesn't exist",
      description: `The inferred artifact path doesn't exist.

Please [report it](https://github.com/arufa-research/polar/issues/new) to help us improve Polar.`,
      shouldBeReported: true
    }
  },
  SOURCE_NAMES: {
    INVALID_SOURCE_NAME_ABSOLUTE_PATH: {
      number: 1000,
      message:
        'Invalid source name %name%. Expected source name but found an absolute path.',
      title: 'Invalid source name: absolute path',
      description: `A Solidity source name was expected, but an absolute path was given.

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    },
    INVALID_SOURCE_NAME_RELATIVE_PATH: {
      number: 1001,
      message:
        'Invalid source name %name%. Expected source name but found a relative path.',
      title: 'Invalid source name: relative path',
      description: `A Solidity source name was expected, but a relative path was given.

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    },
    INVALID_SOURCE_NAME_BACKSLASHES: {
      number: 1002,
      message:
        'Invalid source %name%. The source name uses backslashes (\\) instead of slashes (/).',
      title: 'Invalid source name: backslashes',
      description: `A Solidity source name was invalid because it uses backslashes (\\) instead of slashes (/).

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    },
    INVALID_SOURCE_NOT_NORMALIZED: {
      number: 1003,
      message: 'Invalid source name %name%. Source names must be normalized',
      title: 'Invalid source name: not normalized',
      description: `A Solidity source name was invalid because it wasn't normalized. It probably contains some "." or "..".

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    },
    WRONG_CASING: {
      number: 1004,
      message:
        'Invalid source map %incorrect%, its correct case-sensitive source name is %correct%',
      title: 'Incorrect source name casing',
      description: `You tried to resolve a Solidity file with an incorrect casing.

Polar's compiler is case sensitive to ensure projects are portable across different operating systems.`,
      shouldBeReported: true
    },
    FILE_NOT_FOUND: {
      number: 1005,
      message: 'Solidity source file %name% not found',
      title: 'Solidity source file not found',
      description: `A source name should correspond to an existing Solidity file but it doesn't.

Polar's compiler is case sensitive to ensure projects are portable across different operating systems.`,
      shouldBeReported: true
    },
    NODE_MODULES_AS_LOCAL: {
      number: 1006,
      message:
        'The file %path% is treated as local but is inside a node_modules directory',
      title: 'File from node_modules treated as local',
      description: `A file was treated as local but is inside a node_modules directory.

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    },
    EXTERNAL_AS_LOCAL: {
      number: 1007,
      message: 'The file %path% is treated as local but is outside the project',
      title: 'File from outside the project treated as local',
      description: `A file was treated as local but is outside the project.

If you aren't overriding compilation-related tasks, please report this as a bug.`,
      shouldBeReported: true
    }
  },
  CONTRACT_NAMES: {
    INVALID_FULLY_QUALIFIED_NAME: {
      number: 1100,
      message: 'Invalid fully qualified contract name %name%.',
      title: 'Invalid fully qualified contract name',
      description: `A contract name was expected to be in fully qualified form, but it's not.

A fully qualified name should look like file.sol:Contract`,
      shouldBeReported: false
    }
  }
};

export const ERROR_RANGES: {
  [category in keyof typeof ERRORS]: {
    min: number
    max: number
    title: string
  };
} = {
  GENERAL: { min: 1, max: 99, title: 'General errors' },
  NETWORK: { min: 100, max: 199, title: 'Network related errors' },
  TASK_DEFINITIONS: {
    min: 200,
    max: 299,
    title: 'Task definition errors'
  },
  ARGUMENTS: { min: 300, max: 399, title: 'Arguments related errors' },
  RESOLVER: {
    min: 400,
    max: 499,
    title: 'Dependencies resolution errors'
  },
  SOLC: { min: 500, max: 599, title: 'Solidity related errors' },
  BUILTIN_TASKS: { min: 600, max: 699, title: 'Built-in tasks errors' },
  ARTIFACTS: { min: 700, max: 799, title: 'Artifacts related errors' },
  PLUGINS: { min: 800, max: 899, title: 'Plugin system errors' },
  INTERNAL: { min: 900, max: 999, title: 'Internal Polar errors' },
  SOURCE_NAMES: { min: 1000, max: 1099, title: 'Source name errors' },
  CONTRACT_NAMES: { min: 1100, max: 1199, title: 'Contract name errors' }
};

/**
 * Setting the type of ERRORS to a map let us access undefined ones. Letting it
 * be a literal doesn't enforce that its values are of type ErrorDescriptor.
 *
 * We let it be a literal, and use this variable to enforce the types
 */
const _PHONY_VARIABLE_TO_FORCE_ERRORS_TO_BE_OF_TYPE_ERROR_DESCRIPTOR: {
  [category: string]: {
    [name: string]: ErrorDescriptor
  }
} = ERRORS;
