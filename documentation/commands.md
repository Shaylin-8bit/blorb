<h1> Commands Format </h1>

<h2> File </h2>
<li>
  The file to store a command must be stored under a category folder in the commands directory.
</li>
<li>
  The files must be a .js file with the same name as the command.
</li>

<h2> Exported Object </h2>

<li>
  The export from the file must be an object with the listed attributes
</li>
<li>
  "name" which is the same as the commands name.
</li>
<li>
  "info" which is information about the command. 
</li>
<li>
  "type" the category of the command.
</li>
<li>
  "run" the function called when the function is run.
</li>

<h2> Run Function </h2>

The function pointed to by the exports "run" will be passed two arguments. 
<li>
  A message object representing the message which triggered the call.
</li>
<li>
  A client object representing the bot.
</li>