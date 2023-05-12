import { pivotScene } from "./pivot";
import config from "src/config";

export function addTerminal() {
  const terminal = new Entity();
  terminal.addComponent(new GLTFShape("models/Terminal_01.glb"));
  terminal.addComponent(
    new Transform({
      position: config.terminal.position,
    })
  );
  terminal.addComponent(
    new OnPointerDown(
      () => {
        openExternalURL("https://www.loreal.com/en/careers/");
      },
      {
        hoverText: "Más información",
        distance: 10,
      }
    )
  );
  terminal.setParent(pivotScene);
}
