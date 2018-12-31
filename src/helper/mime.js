const path = require('path');

const mimeType = {
  'css': {
    text: 'text/css',
    icon: '/src/assets/css.svg'
  },
  'gif': {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'html': {
    text: 'text/html',
    icon: '/src/assets/html.svg'
  },
  'tpl': {
    text: 'text/html',
    icon: '/src/assets/html.svg'
  },
  'ico': {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'jpeg':  {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'jpg': {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'js': {
    text: 'text/javascript',
    icon: '/src/assets/javascript.svg'
  },
  'json': {
    text: 'application/json',
    icon: '/src/assets/json.svg'
  },
  'pdf': {
    text: 'application/pdf',
    icon: '/src/assets/pdf.svg'
  },
  'png': {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'svg': {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'swf': {
    text: 'application/x-shockwave-flash',
    icon: '/src/assets/flash.svg'
  },
  'tiff':  {
    text: 'image/gif',
    icon: '/src/assets/image.svg'
  },
  'txt': {
    text:  'text/plain',
    icon: '/src/assets/file.svg'
  },
  'wma': {
    text: 'audio/x-ms-wma',
    icon: '/src/assets/audio.svg'
  },
  'wmv': {
    text: 'application/x-shockwave-flash',
    icon: '/src/assets/flash.svg'
  },
  'xml': {
    text: 'text/xml',
    icon: '/src/assets/xml.svg'
  },
  'md': {
    text: 'text/md',
    icon: '/src/assets/markdown.svg'
  },
  'markdown': {
    text: 'text/md',
    icon: '/src/assets/markdown.svg'
  }
};

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();

  if (!ext) {
    ext = filePath;
  }
  return mimeType[ext] || mimeType['txt'];
};