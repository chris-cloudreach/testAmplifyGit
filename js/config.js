// var userPool_Id = '${terraform output UserpoolId}';
// var userPoolClient_Id = '${terraform output App_clientId}';

window._config = {
    cognito: {
        userPoolId: 'eu-west-1_0OieCxgWg', // e.g. eu-west-1_FUcVUD99F
        userPoolClientId: '2654qb3kumu4secigl7m2jmp21', // e.g. 4vpt2e23im4qv8jcom9rq66bqm
        region: 'eu-west-1' // eu-west-1
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
