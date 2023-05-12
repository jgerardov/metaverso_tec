import { pivotScene } from "./pivot";
import config from "src/config";

export function addCanopy() {
  const canopy = new Entity();
  canopy.addComponent(new GLTFShape("models/Canopy_01.glb"));
  canopy.addComponent(
    new Transform({
      position: config.canopy.position,
    })
  );
  canopy.setParent(pivotScene);
}
