/*
Copyright (C) Pegasus Fintech Inc. - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by AJ Ostrow <aj.ostrow@pegasusfintech.com>
*/

const timeTravel = function(duration) {
  const id = Date.now()

  return new Promise((resolve, reject) => {
    web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [duration],
      id: id,
    }, err1 => {
      if (err1) return reject(err1)

      web3.currentProvider.send({
        jsonrpc: '2.0',
        method: 'evm_mine',
        id: id+1,
      }, (err2, res) => {
        return err2 ? reject(err2) : resolve(res)
      })
    })
  })
}

const captureError = async function(promise) {
  try {
    await promise
  } catch (error) {
    return error
  }
  assert.fail('Expected to throw error.')
}

const logWatch = function(event) {
  return new Promise(function(resolve, reject) {
    event.watch(function(error, log) {
      event.stopWatching()
      if (error) {
        reject(error)
      } else {
        resolve(log)
      }
    })
  })
}

const ZERO_ADDRESS = 0x0000000000000000000000000000000000000000;

module.exports = {
  timeTravel,
  captureError,
  logWatch,
  ZERO_ADDRESS,
}
