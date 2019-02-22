package edu.fpt.comp1661;

import org.apache.cordova.*;
import org.json.JSONArray;

public class StoragePlugin extends CordovaPlugin {
    private static final String NAME = StoragePlugin.class.getSimpleName();

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        LOG.d(NAME, "Initialized " + NAME);
    }

    @Override
    public boolean execute(String cmd, JSONArray array, final CallbackContext context) {
        switch (cmd) {
            case "store":
                LOG.d(NAME, "Done storing");
                break;
        }
        return false;
    }
}
