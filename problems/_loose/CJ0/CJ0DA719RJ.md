---
tag: CJ0DA719RJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Cauchy problem

$$\frac{\partial ^2A}{\partial t^2}=9\frac{\partial^2 A}{\partial x^2}-2B,\;\frac{\partial^2 B}{\partial t^2}=6\frac{\partial^2 B}{\partial x^2}-2A$$

$$A|_{t=0}=\cos x, B|_{t=0}=0, \left.\frac{\partial A}{\partial t}\right|_{t=0}=\left.\frac{\partial B}{\partial t}\right|_{t=0}=0$$
