import Raven from "raven-js";

function init () {
  Raven.config("https://1a4799fdaf1b488a856941656c8b485a@sentry.io/1726925", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error)
}

export default {
  init,
  log
}