export async function compareFaces(ciPhoto, facePhoto, callback) {
  var formdata = new FormData();
  formdata.append('source', ciPhoto);
  formdata.append('target', facePhoto);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch(
    'https://fer.demos.oxusmedia.com/dineroYA/aws/compareFaces',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      callback(result);
    })
    .catch(error => console.log('error', error));
}
