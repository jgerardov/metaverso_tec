import { pivotScene } from "./pivot";
import config from "src/config";

export function addTable() {
  const table = new Entity();
  table.addComponent(new GLTFShape("models/Table_02.glb"));
  table.addComponent(
    new Transform({
      position: config.table.position,
    })
  );
  table.setParent(pivotScene);
}
