import { pivotScene } from "./pivot";
import config from "src/config";

export function addLampPost() {
  const lampPost = new Entity();
  lampPost.addComponent(new GLTFShape("models/LampPost_03.glb"));
  lampPost.addComponent(
    new Transform({
      position: config.lampPost.position,
    })
  );
  lampPost.setParent(pivotScene);
}
