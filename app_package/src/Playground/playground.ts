import * as BABYLON from "babylonjs";

class Playground {
    public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = BABYLON.Color4.FromInts(0, 0, 0, 255);

        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        const resizeOrthographicCamera = () => {
            camera.orthoTop = 10;
            camera.orthoBottom = 0;
            camera.orthoLeft = -camera.orthoTop * canvas.width / canvas.height / 2;
            camera.orthoRight = -camera.orthoLeft;
        };
        resizeOrthographicCamera();
        engine.onResizeObservable.add(resizeOrthographicCamera);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { segments: 16, diameter: 2 }, scene);
        sphere.position.y = 1;
        
        const spriteUrl = "https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/packages/tools/playground/public/textures/player.png"
        const spriteManagerPlayer = new BABYLON.SpriteManager("playerManager", spriteUrl, 3, 64, scene);
        const player0 = new BABYLON.Sprite("player0", spriteManagerPlayer);
        player0.position.z = -2;

        scene.registerBeforeRender(() => {
            player0.position.y -= 0.03 * scene.getAnimationRatio();
            if (player0.position.y < 0) {
                player0.position.y = 10;
            }
        });
        player0.playAnimation(0, 44, true, 100);

        return scene;
    }
}

export function CreatePlaygroundScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
    return Playground.CreateScene(engine, canvas);
}
