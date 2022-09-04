import { App } from "vue";
import { icon } from "./icon";

export const registerDirectives = (app: App): void => {
  app.directive("icon", icon);
};
