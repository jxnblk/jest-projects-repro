
# jest projects configuration

This is a reproduction of an issue I've encountered when using Jest's `projects` configuration option with a JSON-stringified config argument.

The goal is to run tests in both `node` and `jsdom` environments for the server and client tests, and run "shared" tests in both environments.
