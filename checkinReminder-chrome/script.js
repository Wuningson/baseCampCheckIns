function getTime() {
  let d = new Date();
  return d.setHours(13, 17, 0, 0);
}

function handleStartup() {
  console.log(`Starting...`);
  const when = getTime();
  chrome.alarms.create("baseCamp", { when });
}

function handleInstalled(details) {
  console.log(`Installed successfully...`);
  const when = getTime();
  chrome.alarms.create("baseCamp", { when });
}

chrome.runtime.onInstalled.addListener(handleInstalled);

chrome.runtime.onStartup.addListener(handleStartup);

chrome.alarms.onAlarm.addListener(() => {
  chrome.windows.create({
    url: "https://launchpad.37signals.com/signin"
  });
});
