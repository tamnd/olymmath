---
tag: 2XR7PCG4FB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178360
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
The natural numbers $x, y, z$ satisfy the equation

$$
13 x+8 y=5 z
$$

Prove that the number $(x+y)(y+z)(z+x)$ is divisible by 130.
