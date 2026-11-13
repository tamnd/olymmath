---
tag: WRN2K8XJSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_{n}(x)=\sum_{k=1}^{n}\frac{\sin kx}{\sqrt{k(k+1)}}.$

Find $\lim_{n\to\infty}\int_{0}^{2\pi}\{f_{n}(x)\}^{2}dx.$
