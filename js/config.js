// var userPool_Id = '${terraform output UserpoolId}';
// var userPoolClient_Id = '${terraform output App_clientId}';

window._config = {
    cognito: {
        userPoolId: '', // e.g. eu-west-1_FUcVUD99F
        userPoolClientId: '', // e.g. 4vpt2e23im4qv8jcom9rq66bqm
        region: '' // eu-west-1
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
