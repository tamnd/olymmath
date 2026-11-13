---
tag: YMD010PZF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255117
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
Let $\Gamma$ be a semicircle with diameter $AB$. On this diameter is selected a point $C$, and on the semicircle are selected points $D$ and $E$ so that $E$ lies between $B$ and $D$. It turned out that $\angle ACD = \angle ECB$. The intersection point of the tangents to $\Gamma$ at points $D$ and $E$ is denoted by $F$. Prove that $\angle EFD=\angle ACD+ \angle ECB$.
