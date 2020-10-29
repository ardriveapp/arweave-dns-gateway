

// @ts-ignore
import greenlock from "greenlock-express";

import * as path from "path";

import { app } from './app';

greenlock
.init({
    packageRoot: path.join(__dirname, '..' ),
    configDir: path.join(__dirname, '..', 'greenlock-manager'),
    maintainerEmail: "phil@ardrive.io",
    cluster: false,
    debug: true,
})
// Serves on 80 and 443
// Get's SSL certificates magically!
.serve(app);
