const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')
const { Response } = require('http')

class View {
    constructor(name, variables, email) {
        this.templateName = name.endsWith('.html') ? name.replace('.html', '') : name;
        this.templateDir = path.join(__dirname, '..', 'server', 'templates')
        this.templatePath = path.join(this.templateDir, email ? 'email' : 'web', `${this.templateName}.html`)

        this.renderedView = this.renderView(this.templatePath, variables)
    }

    renderView(path, variables) {
        let html = fs.readFileSync(path)
        let template = handlebars.compile(html.toString())
        return template(variables)
    }

    returnView() {
        return this.renderedView
    }
}

module.exports = (name, variables={}, email=false) => {
    const v = new View(name, variables, email)
    return v.returnView()
}