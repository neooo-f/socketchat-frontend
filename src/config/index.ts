// import { ConfigType } from '../types/config-type';
// import common from './config.default';
// import development from './config.dev';
// import local from './config.local';
// import production from './config.prod';

// const getConfig = (): ConfigType => {
//   const stage = import.meta.env.VITE_APP_STAGE;
//   switch (stage) {
//     case 'local':
//       return { ...common, ...local };
//     case 'development':
//       return { ...common, ...development };
//     case 'production':
//       return { ...common, ...production };
//     default:
//       throw new Error('No stage specified');
//   }
// };

// export default getConfig();