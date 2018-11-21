// call api
export default callApi(
    method = 'GET',
    endpoint,
    data = {}
) = axios({
    method: method,
    url: endpoint,
    data: data
})
    .then(res => console.log(res))
    .catch(err => console.log(err));