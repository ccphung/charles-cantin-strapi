module.exports = ({ env }) => ({
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
      region: 'eu-west-3',
      params: {
        Bucket: 'charlescantin',
      },
    },
  });
  