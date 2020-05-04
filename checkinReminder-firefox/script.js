function getTime() {
  let d = new Date();
  return d.setHours(16, 30, 0, 0);
}

function handleStartup() {
  console.log(`Starting...`);
  const when = getTime();
  browser.alarms.create("baseCamp", { when });
}

function handleInstalled(details) {
  console.log(`Installed successfully...`);
  const when = getTime();
  browser.alarms.create("baseCamp", { when });
}

function handleAlarm() {
  browser.windows.create({
    url: "https://launchpad.37signals.com/signin",
    titlePreface: "Fill BaseCamp...",
    state: "fullscreen"
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);

browser.runtime.onStartup.addListener(handleStartup);

browser.alarms.onAlarm.addListener(handleAlarm);