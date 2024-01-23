//requisicao para configurar antes da requisicao

//axios.interceptors.request.use(
postsFetch.interceptors.request.use(
    function(config) {
        console.log("antes da requisicao");
        return config;
    },

    function(error) {
        return Promise.reject(error);
    }
);

//resposta para configurar antes da resposta
//axios.interceptors.response.use( 
postsFetch.interceptors.response.use( // pa ta usando a custom
    function(response) {
        console.log("antes da resposta");
        return response;
    },

    function(error) {
        return Promise.reject(error);
    }
)