sendData = async function(req, res){
    const data = 'I\'m an app!!'
  res.status(200).send(data);
}

module.exports = sendData