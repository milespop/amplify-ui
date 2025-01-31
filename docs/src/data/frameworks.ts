export type Framework =
  | 'angular'
  | 'flutter'
  | 'react'
  | 'react-native'
  | 'vue';
export type Frameworks = Framework[];

export const FRAMEWORKS: Frameworks = [
  'angular',
  'flutter',
  'react',
  'react-native',
  'vue',
];

export const FRAMEWORK_DISPLAY_NAMES: Record<Framework, string> = {
  angular: 'Angular',
  flutter: 'Flutter',
  react: 'React',
  'react-native': 'React Native',
  vue: 'Vue',
};

// React Native requires direct installation of dependencies with native modules
export const REACT_NATIVE_DEPENDENCIES =
  'react-native-safe-area-context amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values react-native-url-polyfill';

export const FRAMEWORK_INSTALL_SCRIPTS = {
  react: '@aws-amplify/ui-react aws-amplify',
  vue: '@aws-amplify/ui-vue aws-amplify',
  angular: '@aws-amplify/ui-angular aws-amplify',
  flutter: 'amplify_authenticator',
  'react-native': `@aws-amplify/ui-react-native aws-amplify ${REACT_NATIVE_DEPENDENCIES}`,
};
