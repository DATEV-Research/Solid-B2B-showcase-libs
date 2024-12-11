"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const accordion_1 = __importDefault(require("primevue/accordion"));
const accordiontab_1 = __importDefault(require("primevue/accordiontab"));
const avatar_1 = __importDefault(require("primevue/avatar"));
const badge_1 = __importDefault(require("primevue/badge"));
const badgedirective_1 = __importDefault(require("primevue/badgedirective"));
const button_1 = __importDefault(require("primevue/button"));
const card_1 = __importDefault(require("primevue/card"));
const checkbox_1 = __importDefault(require("primevue/checkbox"));
const chip_1 = __importDefault(require("primevue/chip"));
const chips_1 = __importDefault(require("primevue/chips"));
const config_1 = __importDefault(require("primevue/config"));
const confirmationservice_1 = __importDefault(require("primevue/confirmationservice"));
const confirmdialog_1 = __importDefault(require("primevue/confirmdialog"));
const contextmenu_1 = __importDefault(require("primevue/contextmenu"));
const dialog_1 = __importDefault(require("primevue/dialog"));
const divider_1 = __importDefault(require("primevue/divider"));
const dropdown_1 = __importDefault(require("primevue/dropdown"));
const inputnumber_1 = __importDefault(require("primevue/inputnumber"));
const inputswitch_1 = __importDefault(require("primevue/inputswitch"));
const inputtext_1 = __importDefault(require("primevue/inputtext"));
const listbox_1 = __importDefault(require("primevue/listbox"));
const menu_1 = __importDefault(require("primevue/menu"));
const message_1 = __importDefault(require("primevue/message"));
const panel_1 = __importDefault(require("primevue/panel"));
const progressbar_1 = __importDefault(require("primevue/progressbar"));
const radiobutton_1 = __importDefault(require("primevue/radiobutton"));
const selectbutton_1 = __importDefault(require("primevue/selectbutton"));
const skeleton_1 = __importDefault(require("primevue/skeleton"));
const speeddial_1 = __importDefault(require("primevue/speeddial"));
const stepper_1 = __importDefault(require("primevue/stepper"));
const stepperpanel_1 = __importDefault(require("primevue/stepperpanel"));
const tabmenu_1 = __importDefault(require("primevue/tabmenu"));
const textarea_1 = __importDefault(require("primevue/textarea"));
const toast_1 = __importDefault(require("primevue/toast"));
const toolbar_1 = __importDefault(require("primevue/toolbar"));
const tooltip_1 = __importDefault(require("primevue/tooltip"));
const toastservice_1 = __importDefault(require("primevue/toastservice"));
const dialogservice_1 = __importDefault(require("primevue/dialogservice"));
const setupApp = (app, router) => {
    if (router) {
        app.use(router);
    }
    app.use(config_1.default, { ripple: true });
    app.use(toastservice_1.default);
    app.use(confirmationservice_1.default);
    app.use(dialogservice_1.default);
    app.component("Button", button_1.default);
    app.component("Toolbar", toolbar_1.default);
    app.component("Avatar", avatar_1.default);
    app.component("Card", card_1.default);
    app.component("Checkbox", checkbox_1.default);
    app.component("Chips", chips_1.default);
    app.component("Chip", chip_1.default);
    app.component("InputSwitch", inputswitch_1.default);
    app.component("InputText", inputtext_1.default);
    app.component("InputNumber", inputnumber_1.default);
    app.component("RadioButton", radiobutton_1.default);
    app.component("Textarea", textarea_1.default);
    app.component("Dialog", dialog_1.default);
    app.component("Dropdown", dropdown_1.default);
    app.component("SpeedDial", speeddial_1.default);
    app.component("Toast", toast_1.default);
    app.component("ProgressBar", progressbar_1.default);
    app.component("Listbox", listbox_1.default);
    app.component("TabMenu", tabmenu_1.default);
    app.component("ContextMenu", contextmenu_1.default);
    app.component("ConfirmDialog", confirmdialog_1.default);
    app.component("Menu", menu_1.default);
    app.component("Divider", divider_1.default);
    app.component("Panel", panel_1.default);
    app.component("Message", message_1.default);
    app.component("StepperPanel", stepperpanel_1.default);
    app.component("Stepper", stepper_1.default);
    app.component("Skeleton", skeleton_1.default);
    app.component("Accordion", accordion_1.default);
    app.component("AccordionTab", accordiontab_1.default);
    app.component("SelectButton", selectbutton_1.default);
    app.component("Badge", badge_1.default);
    app.directive('badge', badgedirective_1.default);
    app.directive("tooltip", tooltip_1.default);
};
exports.setupApp = setupApp;
