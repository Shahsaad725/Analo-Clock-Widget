const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("clockAPI", {
    startAnalogClock: () => {} // renderer will override this
});
