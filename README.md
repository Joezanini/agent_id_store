# agent_id_store

<agent_id_store is a Webex Contact Center custom widget that does x,y,z>

## Custom Widgets
A Custom Widget is a third-party application that is configured in the JSON layout. You can place the custom widget on the custom page, custom tab (Auxiliary Information pane), or on the horizontal header of the Agent Desktop.

To get started with building Custom Widgets, it may be a good idea to request a [developer sandbox](https://developer.webex-cx.com/sandbox) from the Webex Contact Center Developer Portal.

Once you receive your sandbox credentials via email, open a incognito window in your web browser and go to the [Admin Portal](https://admin.webex.com). Login using your sandbox administrator credentials provided in the email.

Navigate to Contact Center > Desktop Layout, and download the default layout file.

## Custom Widgets layout
The file [Default Desktop Layout agent.json](https://github.com/Joezanini/agent_id_store/blob/main/Default%20Desktop%20Layout%20agent.json) in this repository is a sample desktop layout that you can upload to the [agent deskop](https://admin.webex.com/wxcc/desktop-experience/desktop-layouts) that works with this sample code.

## Bundling
Custom widgets must bundle all their static resources (CSS, JavaScript, markup, and images) in a single JavaScript file using a bundle library such as Webpack, Rollup, or Parcel. We used [Webpack](https://webpack.js.org/) to bundle the custom widget files for this repot. You can the bundle [here](https://github.com/Joezanini/agent_id_store/blob/main/dist/bundle.js). The bundle is ready to be used as is, but if you make any changes to the project, bundle the files again via Webpack to bring the bundled file up to date.

## Hosting via Live Server
For this sample, we hosted the code bundle within VS Code uing the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plug-in. You can install Live Server in VS Cdoe, which will make it available in the blue status bar in VS Code. Open the project and click to Go Live from the status bar to turn the server on/off. You can open the [Default Desktop Layout Agent.json](https://github.com/Joezanini/agent_id_store/blob/5847475cb0050c92d4236d0cc3cb69dde421d704/Default%20Desktop%20Layout%20agent.json#L221) file in the browser and confirm that the "script" tag on line 221 of the layout file is pointing to the hosted bundle.js so that the browser can access the widget when the Agent Desktop is loaded. The widget will not be accessible unless the bundled file is hosted live.

## Accessing the Agent Desktop
Once the Desktop Layout file is uploaded in Control Hub, and Live Server is running,
You can log into the Agent Desktop with the Premium Agent credentials supplied in the
email response with your Webex Contact Center sandbox credentials.

You should see an additional icon on the left side bar of the agent desktop. The 2
buttons that make up the simple widget should be populated in the main page when the
icon is clicked, displaying the Agent ID and the Agent Name from the STORE keys via
properties.




