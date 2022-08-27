import { AmbientLight, Color, Group, Scene, Vector3 } from 'three'
// import { PerspectiveCamera } from './shared/cameras/PerspectiveCamera'
// import { WebGLRenderer } from './shared/renderer/webGlRenderer'
// import { CommonDatas } from './shared/commonDatas'
// import {MainPlanet} from './shared/objects/MainPlanet'
// import {FooterPlanet} from './shared/objects/FooterPlanet'
// import { RectAreaLight } from './shared/light/rectArea'
// import { Compositor } from './shared/compositor/compositor'
import store from '../store'

export default class WebGLApp {
  constructor(domWrapper) {
    const element = domWrapper
    const elementZindex = element.style.zIndex

    // this.common = new CommonDatas(3)

    // this.camera = new PerspectiveCamera(element)
    // this.camera.layers.enable(1);
    // this.camera.layers.enable(2);
    // this.camera.layers.enable(3);

    // this.common.setCamera(this.camera);

    // this.renderer = new WebGLRenderer(element)

    // // SCENE SETTING
    // this.scene = new Scene()
    // this.footerScene = new Scene()

    // // COMPOSITOR
    // this.compositor = new Compositor(this.scene, this.camera, this.renderer)

    // // OBJECTS
    // this.planet = new MainPlanet(2);
    // this.common.movingGroup.add(this.planet.mesh)

    // if (!store.isMobile) {
    //   this.footer = document.querySelector('.f')

    //   this.footerPlanet = new FooterPlanet(3, element, this.camera, 'footer');
    //   const parentFooter = new Group()

    //   parentFooter.add(this.footerPlanet.mesh)
    //   this.scene.add(parentFooter)

    //   this.common.scroll.add(() => {
    //     this.footerPos = 1 - this.footer.getBoundingClientRect().top / window.innerHeight

    //     if (this.footerPos > 0.30) {
    //       element.style.zIndex = 999999;
    //       this.footerPlanet.reveal()
    //       this.planet.hide(this.areaL1.light)
    //     } else if (this.footerPlanet.revealed) {
    //       element.style.zIndex = elementZindex;
    //       this.footerPlanet.hide()
    //       this.planet.reveal(this.areaL1.light)
    //     }

    //     parentFooter.lookAt(this.camera.position)
    //     parentFooter.rotateZ(-0.05)

    //     this.cameraBox = this.common.visibleBox(this.camera.position.distanceTo(new Vector3(0, 0, 0)))
    //     parentFooter.position.y = (this.footerPos - 0.1) * this.cameraBox[1] - this.cameraBox[1] / 2
    //   })
    // }

    // // LIGHTING
    // this.ambientLight = new AmbientLight(new Color(0xffffff), 0.5)
    // this.scene.add(this.ambientLight)

    // this.areaL1 = new RectAreaLight('area1', new Color(0x125464), 35000, 33, 4.5)
    // this.areaL1.light.position.set(16.6, 13.3, -35)
    // this.areaL1.light.lookAt(this.camera.position)
    // this.areaL1.light.layers.enable(2)
    // this.common.movingGroup.add(this.areaL1.light)

    // this.point1 = this.common.sun
    // this.scene.add(this.point1)

    // this.scene.add(this.common.movingGroup)

    // this.renderer.render(this.scene, this.camera)

    // this.animation = () => {

    //   /**
    //    * Layer 1 = bloom
    //    * Layer 2 = MainPlanet
    //    * Layer 3 = FooterPlanet
    //   */
    //   if (!store.isMobile) {
    //     this.camera.layers.enable(1);
    //     this.camera.layers.disable(0);
    //     this.camera.layers.disable(2);
    //     this.camera.layers.disable(3);
    //     this.compositor.bloomComposer.render()
    //   }
    //   this.camera.layers.disable(1);
    //   this.camera.layers.enable(0);
    //   this.camera.layers.enable(2);
    //   this.camera.layers.enable(3);
    //   this.compositor.finalComposer.render()
    // }

    // this.initAnimation()
  }

  initAnimation() {
    // this.common.animate.add(this.animation)
  }
}
