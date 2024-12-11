"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useServiceWorkerUpdate = void 0;
const vue_1 = require("vue");
const hasUpdatedAvailable = (0, vue_1.ref)(false);
let registration;
// Store the SW registration so we can send it a message
// We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
// To alert the user there is an update they need to refresh for
const updateAvailable = (event) => {
    registration = event.detail;
    hasUpdatedAvailable.value = true;
};
// Called when the user accepts the update
const refreshApp = () => {
    hasUpdatedAvailable.value = false;
    // Make sure we only send a 'skip waiting' message if the SW is waiting
    if (!registration || !registration.waiting)
        return;
    // send message to SW to skip the waiting and activate the new SW
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
};
// Listen for our custom event from the SW registration
if ('addEventListener' in document) {
    document.addEventListener("serviceWorkerUpdated", updateAvailable, {
        once: true,
    });
}
let isRefreshing = false;
// this must not be in the service worker, since it will be updated ;-)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (isRefreshing)
            return;
        isRefreshing = true;
        window.location.reload();
    });
}
const useServiceWorkerUpdate = () => {
    return {
        hasUpdatedAvailable,
        refreshApp,
    };
};
exports.useServiceWorkerUpdate = useServiceWorkerUpdate;