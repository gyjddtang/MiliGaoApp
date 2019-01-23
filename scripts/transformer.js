const upstreamTransformer = require('metro/src/reactNativeTransformer');

module.exports.transform = ({ src, filename, options }) => {
  return upstreamTransformer.transform({ src, filename, options });
};