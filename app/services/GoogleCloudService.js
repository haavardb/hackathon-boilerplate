import ApiService from './ApiService';

const GoogleCloudService = {

  // API DOCS
  // https://cloud.google.com/natural-language/docs/quickstart#quickstart-analyze-entities-gcloud

  getSentiment: (text) => {
    return ApiService.post({
      url: 'https://language.googleapis.com/v1/documents:analyzeSentiment',
      fields: 'documentSentiment'
    },{
      document: {
        content: text,
        type: "PLAIN_TEXT"
      },
      encodingType: "UTF8"
    });
  },
};

export default GoogleCloudService;
