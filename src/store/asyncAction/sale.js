export const order_sale = (body) => {
    return dispatch => {
        fetch('http://localhost:3333/sale/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(json => {
                dispatch(console.log(json))
            })
    }
}