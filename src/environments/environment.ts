// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // project: 'gov', // com gov
  project: 'com', // com gov
  isStatic: true,
  apiPath: 'http://172.16.10.8:8060/uk-bsc/v1', // 服务器
  apiPathChangeable: true,
  deployPath: '',
};
