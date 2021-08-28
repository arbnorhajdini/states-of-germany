export function fetchStateList (data) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    body: JSON.stringify(data)
  }
  return fetch(process.env.REACT_APP_DB_HOST + '/stateList', requestOptions).then((res) => res.json())
}

export function fetchPersonIndexCounts (data) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    body: JSON.stringify(data)
  }
  return fetch(process.env.REACT_APP_DB_HOST + '/personIndexCounts', requestOptions).then((res) => res.json())
}
