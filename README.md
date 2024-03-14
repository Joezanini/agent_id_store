# agent_id_store
A Custom Widget is a third-party application that is configured in the JSON layout. You can place the custom widget on the custom page, custom tab (Auxiliary Information pane), or on the horizontal header of the Desktop.

To get started with building Custom Widgets, it may be a good idea to request a [developer sandbox](https://developer.webex-cx.com/sandbox) from the Webex Contact Center Developer Portal.

Once the sandbox credentials have been emailed to you, open an incognito window from the browser and go to the [Admin Portal](https://admin.webex.com). Authenticate here using the Administrator credentials provided when requesting a developer sandbox.

Navigate to Contact Center>Desktop Layout and download a default layout file.

## Custom Widgets layout
The file [Default Desktop Layout agent.json](https://github.com/Joezanini/agent_id_store/blob/main/Default%20Desktop%20Layout%20agent.json) a sample file that you can upload to the [agent deskop](https://admin.webex.com/wxcc/desktop-experience/desktop-layouts). for this app to work.

## Bundling app
Custom widgets must bundle all their static resources (CSS, JavaScript, markup, and images) in a single JavaScript file using a bundle library (for example, Webpack, Rollup, Parcel). The bundle will be hosted from VS Code on the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plug in. To get started on producing this set up, this project uses [Webpack](https://webpack.js.org/). The file is already [bundled](https://github.com/Joezanini/agent_id_store/blob/main/dist/bundle.js). if you make any changes to the project, process the files again via Webpack to bring the bundled file up to date.

## Hosting via Live Server
You can install Live Server making it available in the blue status bar in VS Code.
Open the project and click to Go Live from the status bar to turn the server on/off.
You can navigate the the file in the browser and confirm that [script](https://github.com/Joezanini/agent_id_store/blob/5847475cb0050c92d4236d0cc3cb69dde421d704/Default%20Desktop%20Layout%20agent.json#L221) tag on line 221 of the layout file is assigned the correct value from the browser so that it can access the widget while running. The widget will not be accessible unless the bundled file is hosted live.

## Accessing the Agent Desktop
Once the Desktop Layout file is uploaded in Control Hub, and Live Server is running,
You can log into the Agent Desktop with the Premium Agent credentials supplied in the
email response to the requested Developer Sandbox for Webex Contact Center.

You should see the additional icon on the left side bar of the agent desktop. The 2
buttons that make up the simple widget should be populated in the main page when the
icon is clicked, displaying the Agent ID and the Agent Name from the STORE keys via
properties.




