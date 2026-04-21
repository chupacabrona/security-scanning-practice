const express = require('express')
const escapeHtml = require('escape-html')

const router = express.Router()

// GET /search?q=<img src=x onerror=alert(1)>
router.get('/', (req, res) => {
  const q = req.query.q || ''
  const safeQ = escapeHtml(q)

  res.type('html').send(`
    <h1>Search</h1>
    <p>You searched for: ${safeQ}</p>
  `)
})

module.exports = router
