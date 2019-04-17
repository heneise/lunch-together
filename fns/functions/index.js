const functions = require('firebase-functions')
const admin = require('firebase-admin')
const slugify = require('underscore.string/slugify')

admin.initializeApp(functions.config().firebase)

const defaultDatabase = admin.database()
const rootRef = admin.database().ref()

exports.addPerson = functions.https.onRequest(async (request, response) => {
  // start cors
  response.set('Access-Control-Allow-Origin', '*')
  response.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Cache-Control'
  )
  // end cors

  // accept options requests
  if (request.method === 'OPTIONS') {
    return response.status(204).send()
  }

  // verify participant info
  if (!request || !request.body || !request.body.participant) {
    return response.status(400).send()
  }

  const participant = request.body.participant
  const participantsRef = rootRef.child(`participants/${slugify(participant)}`)
  participantsRef.set({ name: participant })

  response.send({ ok: true })
})
