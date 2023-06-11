/**
 * @license
 * Copyright 2020 Xingwang Liao <kuoruan@gmail.com>
 *
 * Licensed to the public under the MIT License.
 */
"use strict";

"require fs";

"require uci";

"require view";

"require ui";

return view.extend({
    load: function () {
        return uci.load("v2ray").then((function () {
            var a = uci.get("v2ray", "main", "config_file");
            return a || (a = "/var/etc/v2ray/v2ray.main.json"), Promise.all([Promise.resolve(a), L.resolveDefault(fs.read(a), "")]);
        }));
    },
    render: function (data) {
        var e = void 0 === data ? [] : data;
        var r = e[0];
        var t = void 0 === r ? "" : r;
        var o = e[1];
        var s = void 0 === o ? "" : o;
        return E([
            E("h2", "%s - %s".format(_("V2Ray"), _("About"))),
            E("p", _("LuCI support for V2Ray.")),
            E("p", _("Version: %s").format("2.2.1" + "-" + "0")),
            E("p", _("Author: %s").format("Xingwang Liao & BI7PRK")),
            E("p", _("Source: %s").format('<a href="https://github.com/BI7PRK/luci-app-v2ray" target="_blank">https://github.com/BI7PRK/luci-app-v2ray</a>')),
            E("p", _("Latest: %s").format('<a href="https://github.com/BI7PRK/luci-app-v2ray/releases/latest" target="_blank">https://github.com/BI7PRK/luci-app-v2ray/releases/latest</a>')),
            E("p", _("Report Bugs: %s").format('<a href="https://github.com/kuoruan/luci-app-v2ray/issues" target="_blank">https://github.com/kuoruan/luci-app-v2ray/issues</a>')),
            E("p", _("Donate: %s").format('<a href="https://blog.kuoruan.com/donate" target="_blank">https://blog.kuoruan.com/donate</a>')),
            E("p", _("Current Config File: %s").format(t)),
            E("pre", {
                style: "-moz-tab-size: 4;-o-tab-size: 4;tab-size: 4;word-break: break-all;"
            }, s || _("Failed to open file."))
        ]);
    }
});