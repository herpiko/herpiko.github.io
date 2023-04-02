---
layout: post
title:  Tensorflow GPU on Nvidia 1660 Ti
date:   2020-05-05 00:00:00 +0700
categories:
  - Tech
tags:
  - Machine learning
---


<img src="/images/2020-05-05-1660ti.jpg"/>

Although my GPU <a href="https://developer.nvidia.com/cuda-gpus#compute">is not listed here</a>, I can confirm that 1660 Ti works. The machine learning training is now significantly faster than using CPU.

~~~bash
➜  imagerec git:(updated-deps) ✗ nvidia-smi
Tue May  5 15:00:40 2020
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 440.33.01    Driver Version: 440.33.01    CUDA Version: 10.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 166...  On   | 00000000:01:00.0  On |                  N/A |
| 32%   35C    P8    12W / 130W |    293MiB /  5941MiB |      2%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|    0      1549      G   /usr/lib/xorg/Xorg                            18MiB |
|    0      1953      G   /usr/bin/gnome-shell                          48MiB |
|    0      2592      G   /usr/lib/xorg/Xorg                           108MiB |
|    0      2725      G   /usr/bin/gnome-shell                         114MiB |
+-----------------------------------------------------------------------------+
➜  imagerec git:(updated-deps) ✗ python
Python 3.7.7 (default, May  5 2020, 04:20:38)
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from tensorflow.python.client import device_lib
2020-05-05 15:01:16.900600: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libnvinfer.so.6
2020-05-05 15:01:16.901543: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libnvinfer_plugin.so.6
>>> device_lib.list_local_devices()
2020-05-05 15:01:21.071110: I tensorflow/core/platform/cpu_feature_guard.cc:142] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2 FMA
2020-05-05 15:01:21.100259: I tensorflow/core/platform/profile_utils/cpu_utils.cc:94] CPU Frequency: 3692985000 Hz
2020-05-05 15:01:21.100906: I tensorflow/compiler/xla/service/service.cc:168] XLA service 0x55d1bb829330 initialized for platform Host (this does not guarantee that XLA will be used). Devices:
2020-05-05 15:01:21.100968: I tensorflow/compiler/xla/service/service.cc:176]   StreamExecutor device (0): Host, Default Version
2020-05-05 15:01:21.105053: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcuda.so.1
2020-05-05 15:01:21.217053: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.217492: I tensorflow/compiler/xla/service/service.cc:168] XLA service 0x55d1bb8b7590 initialized for platform CUDA (this does not guarantee that XLA will be used). Devices:
2020-05-05 15:01:21.217525: I tensorflow/compiler/xla/service/service.cc:176]   StreamExecutor device (0): GeForce GTX 1660 Ti, Compute Capability 7.5
2020-05-05 15:01:21.217760: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.218479: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1555] Found device 0 with properties:
pciBusID: 0000:01:00.0 name: GeForce GTX 1660 Ti computeCapability: 7.5
coreClock: 1.86GHz coreCount: 24 deviceMemorySize: 5.80GiB deviceMemoryBandwidth: 268.26GiB/s
2020-05-05 15:01:21.218590: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcudart.so.10.1
2020-05-05 15:01:21.218654: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcublas.so.10
2020-05-05 15:01:21.220646: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcufft.so.10
2020-05-05 15:01:21.221035: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcurand.so.10
2020-05-05 15:01:21.223176: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcusolver.so.10
2020-05-05 15:01:21.224561: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcusparse.so.10
2020-05-05 15:01:21.224651: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcudnn.so.7
2020-05-05 15:01:21.224857: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.225935: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.226839: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1697] Adding visible gpu devices: 0
2020-05-05 15:01:21.226907: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library libcudart.so.10.1
2020-05-05 15:01:21.443386: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1096] Device interconnect StreamExecutor with strength 1 edge matrix:
2020-05-05 15:01:21.443435: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1102]      0
2020-05-05 15:01:21.443446: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1115] 0:   N
2020-05-05 15:01:21.443650: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.444083: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:981] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
2020-05-05 15:01:21.444563: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1241] Created TensorFlow device (/device:GPU:0 with 5176 MB memory) -> physical GPU (device: 0, name: GeForce GTX 1660 Ti, pci bus id: 0000:01:00.0, compute capability: 7.5)
[name: "/device:CPU:0"
device_type: "CPU"
memory_limit: 268435456
locality {
}
incarnation: 7827239615455337760
, name: "/device:XLA_CPU:0"
device_type: "XLA_CPU"
memory_limit: 17179869184
locality {
}
incarnation: 9475332420332566901
physical_device_desc: "device: XLA_CPU device"
, name: "/device:XLA_GPU:0"
device_type: "XLA_GPU"
memory_limit: 17179869184
locality {
}
incarnation: 11551463581523616297
physical_device_desc: "device: XLA_GPU device"
, name: "/device:GPU:0"
device_type: "GPU"
memory_limit: 5427691520
locality {
  bus_id: 1
  links {
  }
}
incarnation: 634448236828243524
physical_device_desc: "device: 0, name: GeForce GTX 1660 Ti, pci bus id: 0000:01:00.0, compute capability: 7.5"
]
>>>
~~~

Using CPU,
~~~bash
python train.py  32,29s user 6,06s system 333% cpu 11,514 total
~~~

Using GPU,
~~~bash
GPU=1 python train.py  7,73s user 2,09s system 109% cpu 8,959 total
~~~

The setup is quite complex with various errors and version missmatches. I let myself to symlink different version of CUDA/cuDNN libraries.

If you're planning to buy a GPU to support your machine learning project, I suggest you to pick a RTX graphics card. It's tremendously faster with built-in tensor cores. Unlimited budget? <a href="https://www.nvidia.com/en-us/data-center/dgx-station/">Here you go</a>.
