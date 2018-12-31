<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{{title}}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {margin: 30px;}
    a{display:block; font-size: 18px;text-decoration: none;color:#333;}
    img.icon {display: inline-block;vertical-align: middle;width: 18px;}
  </style>
</head>
<body>
  {{#each files}}
  <a href="{{../dir}}/{{file}}">【<img class="icon" src="{{icon.icon}}" alt="">】 {{file}}</a>
  {{/each}}
</body>
</html>