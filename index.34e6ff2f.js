import{P as o}from"./vendor.cddf5261.js";const u=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};u();const m={frameWidth:97,frameHeight:59},f={loop:!0,volume:1,rate:1,detune:!1};class g extends o.Scene{preload(){this.load.audio("music","assets/sounds/nyan-music.mp3"),this.load.image("bg","assets/sprites/bg.png"),this.load.image("rainbow","assets/sprites/rainbow.png"),this.load.spritesheet("cat","assets/sprites/cat.png",m)}create(){const{width:s,height:i}=this.sys.game.scale.gameSize;this.music=this.sound.add("music"),this.music.play(f),this.add.image(s/2,i/2,"bg");const a=16711680,e=0,t=65280,r=16766720;this.anims.create({key:"walk",frames:this.anims.generateFrameNumbers("cat",{start:0,end:5,first:0}),frameRate:15,repeat:-1}),this.cat=this.add.sprite(150,300,"cat").play("walk").setOrigin(.5,.5).setDepth(1).setTint(a,e,t,r).setInteractive(),this.input.setDraggable(this.cat),this.input.on("drag",(y,n,l,b)=>{const c=n.width/2;n.setX(Math.min(Math.max(c,l),s-c));const h=this.cat.x*this.music.totalDuration/s;this.music.setSeek(h)}),this.rainbow=this.add.image(s/2,i/2,"rainbow")}update(){const{width:s,height:i}=this.sys.game.scale.gameSize,a=this.make.graphics().fillRect(0,0,this.cat.x,i),e=new o.Display.Masks.GeometryMask(this,a);this.rainbow.setMask(e)}}const p={type:o.AUTO,backgroundColor:"#000",width:800,height:600,pixelArt:!0,scene:[g],audio:{disableWebAudio:!1}};new o.Game(p);
