## Hapi API Base
This is a bare-bones API starter for Hapi. It has the basics you need to get going:

1) Routing
2) Controllers
3) CORs
4) Logging (Winston)
5) Linting

---

### Routing
Keep your routing segmented by whatever entity you're managing and make sure it ends with _Routes.js_ so it will be auto-imported. The idea is to segment your code for readability. Each route definition should have a corresponding Controller. For Example `userController` should also have `userRoutes`. By naming the files like this, it makes it much easier to traverse from your IDE.

Export all your routes as an array and they will be flattened and added to the server routes automatically.

_exampleRoutes.js_
```
module.exports = [
  {
    method: 'GET',
    path: '/example',
    handler: ExampleController.demo,
  },
]
```

### Controllers
Consume all of your controllers in their corresponding `{entity}Routes.js` file. This will make it easier to segment in the future.

_exampleController.js_
```
const demo = () => 'Hello, World!'

module.exports = {
  demo,
}
```

### CORs
You can modify your CORs settings from the [hapi.js](constants/hapi.js) file. Add any **ORIGIN** ui locations to make sure your browser is able to interact with it. You'll also see that _credentials_ is set to true so you can pull in cookie information from the request.

### Logging
Winston is pretty great. If you have Splunk, I'd recommend you wire it up to send logs there as well. In your lower environments it'll extend `console.log` with colors.

In all environments, it will add to the [combined.log](logs/combined.log) and [error.log](logs/error.log) files so you can dig around if things are going haywire.

### Linting
This extends the `airbnb` standards for eslint. I tend to go back and forth between that library and `prettier`. You can run linting using npm:
```
npm lint
# OR
npm lint:fix
```

---

## Installation
You can clone down this repo and add your own name for the folder by using this command:
```
git clone git@github.com:ecoker/hapi-base.git your-project-name
# OR
git clone https://github.com/ecoker/hapi-base.git your-project-name
```

**Note:** This is really set up for me to quickly create new APIs for testing and exploring. Feel free to use it, but know that it will continue to be updated as needs/standards change.
