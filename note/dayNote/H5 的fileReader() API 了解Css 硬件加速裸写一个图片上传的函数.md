- [x] H5 的fileReader() API 了解
- [x] Css 硬件加速
- [x] 裸写一个图片上传的函数

css 硬件加速，render tree 中的每一个元素都会在GPU中放到一个图层中，图层在GPU中会形成渲染纹理，而在GPU中图层的transform是不会导致repaint 的，只会在独立的合成器进程中处理

3D 的transform， z-index ，fileter 以及vedio等会新建一个单独的复合图层。

使用css硬件加速应该综合考虑css硬件加速带来的回报以及占用的CPU