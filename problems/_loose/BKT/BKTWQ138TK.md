---
tag: BKTWQ138TK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: mk
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Републички натпревар по математика за средно образование
---
Does there exist a non-constant sequence of natural numbers $a_{1}, a_{2}, \ldots, a_{n}, \ldots$, such that for every natural number $k \geq 2$ the equality $a_{k}=\frac{2 a_{k-1} a_{k+1}}{a_{k-1}+a_{k+1}}$ is satisfied?
