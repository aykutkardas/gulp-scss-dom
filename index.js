const es = require("event-stream");
const scssDom = require("scss-dom");
const JSDOM = require("jsdom").JSDOM;

module.exports = function() {
  return es.map(function(file, cb) {
    let htmlContent = String(file.contents);
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const bodyRegex = new RegExp(/<body[^>]*>((.|[\n\r])*)<\/body>/gim);
    const bodyContent = bodyRegex.exec(htmlContent);

    scssDom(document);
    const newContent = document.body.innerHTML;

    if (bodyContent && bodyContent[1]) {
      htmlContent = htmlContent.replace(bodyContent[1], newContent);
    }

    file.contents = new Buffer(String(htmlContent));
    cb(null, file);
  });
};