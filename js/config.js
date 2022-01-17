// var userPool_Id = '${terraform output UserpoolId}';
// var userPoolClient_Id = '${terraform output App_clientId}';

window._config = {
    cognito: {
        userPoolId: 'eu-west-1_sh6nZJK7U', // e.g. eu-west-1_FUcVUD99F
        userPoolClientId: '2f510reke5ar9c9rl8eo2vihpc', // e.g. 4vpt2e23im4qv8jcom9rq66bqm
        region: 'eu-west-1' // eu-west-1
    },
    api: {
        invokeUrl: 'https://qiopzcwa24.execute-api.eu-west-1.amazonaws.com/DEV' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
