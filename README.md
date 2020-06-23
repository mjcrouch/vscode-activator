# VS Code Activator Extension

Automatically forces activation of the extensions you choose on startup

## Why?

Many extensions are *correctly* implemented so that they only start up when a relevant event occurs in VS Code.
For example, a java extension might not activate until you open a java file. This is normally useful, because it prevents the editor getting bloated with many irrelevant extensions.

However, in some workspaces, you may want to force a particular extension to activate at startup so you don't have to wait for it to start up later.

The *Activator* extension allows you to define a list of extensions that you always want to be started.

## How?

After installing the extension, set the `activator.activateOnStart` setting. This should contain a list of extensions that you want to activate.
Each element is the ID of an extension.

To find the extension ID:
* Within VS code it appears to the right of the extension title
* On the marketplace web page it appears on the right hand side, named "Unique identifier"
* You can also right click on an extension in VS code and choose "Copy Extension ID"

You can define this setting in either the "user" level of the configuration, applying it to all workspaces, or you can apply it to a specific workspace. If you define it in a workspace, it will fully override the user level setting.
