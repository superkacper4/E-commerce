function proxy(app) {
    app.get(/^\/$/, (req, res) => res.redirect('/0'))
}

module.exports = proxy