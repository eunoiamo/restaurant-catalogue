/* eslint-disable max-len */
const UrlParser = {
  parseActiveUrlWithCombiner: () => {
    const { resource, id, verb } = UrlParser._urlSplitter(window.location.hash.slice(1).toLowerCase());
    return UrlParser._urlCombiner({ resource, id, verb });
  },

  parseActiveUrlWithoutCombiner: () => UrlParser._urlSplitter(window.location.hash.slice(1).toLowerCase()),

  _urlSplitter: (url) => {
    const [, resource, id, verb] = url.split('/');
    return {
      resource: resource || null,
      id: id || null,
      verb: verb || null,
    };
  },

  _urlCombiner: ({ resource, id, verb }) => `/${resource || ''}${id ? '/:id' : ''}${verb ? `/${verb}` : ''}`,
};

export default UrlParser;
