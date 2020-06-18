import React, { Component } from "react";
import ReactDOM from "react-dom";
import ObjectUI from './ObjectUI';
import * as BABYLON from "babylon";
import * as OBJLoader from 'babylon-obj-loader';
import * as ColladaLoader from 'babylon-collada-loader';
import './index.css';
import JSZip from "jszip";

OBJLoader(BABYLON);
ColladaLoader(BABYLON);

class ImportOBJ extends Component {
    constructor({ scene }) {
        super();

        this.scene = scene;

    }

    toggle = (event) => {
        //console.log(event);
        let files = event.target.files;
        if (files.length) {
            var file = files[0];
            var filename = file.name;
            var extension = filename.split('.').pop().toLowerCase();
            var reader = new FileReader();
            //console.log(this.scene);
            let scene = this.scene;

            switch (extension) {
                case 'dae':

                    reader.addEventListener('load', (event) => {

                        var contents = event.target.result;
                        this.BABYLON = BABYLON;

                        var loader = new ColladaLoader();
                        var collada = loader.parse(contents);

                        collada.scene.name = filename;
                        //console.log(collada);
                        //this.scene.add(collada.scene);
                        collada.scene.scale.set(1,1,1);
                        collada.scene.updateMatrixWorld(true);
                        for (let i in collada.scene.children) {
                            collada.scene.children[i].children[0].material = new BABYLON.MeshBasicMaterial();
                            collada.scene.children[i].children[0].name = collada.scene.children[i].name;
                            //let pos = collada.scene.children[i].position;
                            //console.log(pos);
                            //collada.scene.children[i].children[0].position.copy(collada.scene.children[i].position);
                            //collada.scene.children[i].children[0].geometry.translate(pos.x, pos.y, pos.z);
                            collada.scene.children[i].children[0].geometry.applyMatrix(collada.scene.children[i].children[0].matrixWorld);

                            collada.scene.children[i].children[0].position.set(0,0,0);
                            collada.scene.children[i].children[0].rotation.set(0,0,0);
                            collada.scene.children[i].children[0].scale.set(1,1,1);

                            //console.log(collada.scene.children[i].children[0].position);

                            //collada.scene.children[i].children[0].rotation.copy(collada.scene.children[i].rotation);
                            //collada.scene.children[i].children[0].geometry.rotateX(collada.scene.children[i].rotation.x);
                            //collada.scene.children[i].children[0].geometry.rotateY(collada.scene.children[i].rotation.y);
                            //collada.scene.children[i].children[0].geometry.rotateZ(collada.scene.children[i].rotation.z);


                            this.scene.add(collada.scene.children[i].children[0]);
                        }
                        //console.log(collada.scene.children);

                        ReactDOM.render(
                            <div>
                                {
                                    this.scene.children.map((mesh) => {

                                        return (<ObjectUI key={mesh.uuid} mesh={mesh} />);
                                    })
                                }
                            </div>, document.getElementById("ui"));



                    }, false);

                    reader.readAsText(file);

                    break;

                case 'obj':

                    reader.addEventListener('load', (event) => {

                        var contents = event.target.result;
                        //console.log( BABYLON.OBJLoader );
                        this.BABYLON = BABYLON;
                        var object = new this.BABYLON.OBJLoader().parse(contents);
                        object.name = filename;

                        //this.scene.add(object);
                        //console.log(object);

                        for (let i in object.children) {
                            object.children[i].material = new BABYLON.MeshBasicMaterial();
                            this.scene.add(object.children[i]);
                        }
                        ReactDOM.render(
                            <div>
                                {
                                    this.scene.children.map((mesh) => {

                                        return (<ObjectUI key={mesh.uuid} mesh={mesh} />);
                                    })
                                }
                            </div>, document.getElementById("ui"));

                        //console.log(object);

                    }, false);
                    reader.readAsText(file);

                    break;

                case 'zip':
                    reader.addEventListener('load', (event) => {
                        let zip = new JSZip();
                        zip.loadAsync(event.target.result)
                            .then(function (zip) {
                                zip.file('assets.js').async("string").then(function (value) {
                                    //console.log(value);
                                    let assets = JSON.parse(value);
                                    console.log(assets);
                                    let geos = {};
                                    let textures = {};
                                    let jsonloader = new BABYLON.JSONLoader();
                                    let total = 0;
                                    let current = 0;
                                    let onLoad = function () {
                                        if (current == total) {
                                            for (let i in assets) {
                                                let mat = new BABYLON.MeshBasicMaterial();
                                                let data = {
                                                    color: 'ffffff',
                                                    scale: assets[i].scale,
                                                    buffer: (assets[i].buffer) ? '1' : '0',
                                                    side: assets[i].side,
                                                    shadows: (assets[i].shadows) ? '1' : '0',
                                                    alphaTest: assets[i].alphaTest || '0',
                                                    transparent: (assets[i].transparent) ? '1' : '0',
                                                    opacity: assets[i].opacity,
                                                    collider: (assets[i].collider) ? '1' : '0',
                                                    wirframe: (assets[i].wirframe) ? '1' : '0',
                                                    pos: assets[i].pos,
                                                    rot: assets[i].rot
                                                };

                                                if (assets[i].map) {
                                                    mat.map = textures[assets[i].map];
                                                    data.map = assets[i].map;
                                                }

                                                if (assets[i].alpha) {
                                                    mat.alphaMap = textures[assets[i].alpha];
                                                    data.alpha = assets[i].alpha;
                                                }

                                                if (assets[i].lightmap) {
                                                    mat.lightMap = textures[assets[i].lightmap];
                                                    data.lightmap = assets[i].lightmap;
                                                }

                                                let mesh = new BABYLON.Mesh(geos[assets[i].geo], mat);

                                                //console.log();
                                                mesh.userData = data;

                                                if (assets[i].alphaTest) {
                                                    mat.alphaTest = assets[i].alphaTest;
                                                }

                                                if (assets[i].transparent) {
                                                    mat.transparent = true;
                                                }

                                                if (assets[i].collider || assets[i].wireframe) {
                                                    mat.wireframe = true
                                                }

                                                if (assets[i].side) {
                                                    mat.side = assets[i].side;
                                                }

                                                if (assets[i].scale) {
                                                    let s = assets[i].scale;
                                                    mesh.scale.set(s, s, s);
                                                }

                                                let pos = data.pos;
                                                mesh.position.fromArray(pos);

                                                let rot = assets[i].rot;
                                                mesh.rotation.x = rot[0] / 180 * Math.PI;
                                                mesh.rotation.y = rot[1] / 180 * Math.PI;
                                                mesh.rotation.z = rot[2] / 180 * Math.PI;

                                                if (assets[i].opacity !== undefined) {
                                                    mat.opacity = assets[i].opacity;
                                                }


                                                mesh.name = i;
                                                scene.add(mesh);
                                                //scope.scene.add(mesh);

                                            }
                                            //console.log(scene);

                                            ReactDOM.render(
                                                <div>
                                                    {
                                                        scene.children.map((mesh) => {

                                                            return (<ObjectUI key={mesh.uuid} mesh={mesh} />);
                                                        })
                                                    }
                                                </div>, document.getElementById("ui"));
                                        }
                                        
                                    };
                                    for (let i in assets) {
                                        total++;
                                        let curAsset = assets[i];
                                        zip.folder('geometry').folder('loc').file(assets[i].geo).async('string').then(function (value) {
                                            current++;
                                            let geo = jsonloader.parse(JSON.parse(value));
                                            geos[curAsset.geo] = new BABYLON.BufferGeometry();
                                            geos[curAsset.geo].fromGeometry(geo.geometry);
                                            //console.log(geo);

                                            onLoad();
                                        });

                                        if (assets[i].map) {
                                            total++;
                                            zip.folder('textures').folder('loc')
                                                .file(assets[i].map).async('arraybuffer').then(function (value) {
                                                    let buffer = new Uint8Array(value);
                                                    let blob = new Blob([buffer.buffer]);
                                                    let img = new Image;
                                                    img.onload = function () {
                                                        current++;
                                                        onLoad();
                                                        document.body.appendChild(this);
                                                    }
                                                    img.src = URL.createObjectURL(blob);
                                                    textures[curAsset.map] = new BABYLON.Texture(img);
                                                    textures[curAsset.map].needsUpdate = true;
                                                    textures[curAsset.map].wrapS = textures[curAsset.map].wrapT = BABYLON.RepeatWrapping;
                                                    textures[curAsset.map].blob = blob;

                                                });
                                        }

                                        if (assets[i].alpha) {
                                            total++;
                                            zip.folder('textures').folder('loc')
                                                .file(assets[i].alpha).async('arraybuffer').then(function (value) {
                                                    let buffer = new Uint8Array(value);
                                                    let blob = new Blob([buffer.buffer]);
                                                    let img = new Image;
                                                    img.onload = function () {
                                                        current++;
                                                        onLoad();
                                                        document.body.appendChild(this);
                                                    }
                                                    img.src = URL.createObjectURL(blob);
                                                    textures[curAsset.alpha] = new BABYLON.Texture(img);
                                                    textures[curAsset.alpha].needsUpdate = true;
                                                    textures[curAsset.alpha].wrapS = textures[curAsset.alpha].wrapT = BABYLON.RepeatWrapping;
                                                    textures[curAsset.alpha].blob = blob;

                                                });
                                        }

                                        if (assets[i].lightmap) {
                                            total++;
                                            zip.folder('textures').folder('loc')
                                                .file(assets[i].lightmap).async('arraybuffer').then(function (value) {
                                                    let buffer = new Uint8Array(value);
                                                    let blob = new Blob([buffer.buffer]);
                                                    let img = new Image;
                                                    img.onload = function () {
                                                        current++;
                                                        onLoad();
                                                        document.body.appendChild(this);
                                                    }
                                                    img.src = URL.createObjectURL(blob);
                                                    textures[curAsset.lightmap] = new BABYLON.Texture(img);
                                                    textures[curAsset.lightmap].needsUpdate = true;
                                                    textures[curAsset.lightmap].wrapS = textures[curAsset.lightmap].wrapT = BABYLON.RepeatWrapping;
                                                    textures[curAsset.lightmap].blob = blob;

                                                });
                                        }

                                    }
                                });
                                // you now have every files contained in the loaded zip
                                //new_zip.file("hello.txt").async("string"); // a promise of "Hello World\n"
                            });
                    }, false);
                    reader.readAsBinaryString(file);

                    break;
                default:
                    alert('bad format');
                    break;
            }
            event.target.value = '';
           
        }
    }

    render() {
        return (
            <label>Import<input type="file" name="file" onChange={this.toggle} className="hidden" /></label>

        )
    }
}

export default ImportOBJ;


