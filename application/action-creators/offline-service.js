import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install({
  onInstalled: () => {
  },
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => window.location.reload(),
});
