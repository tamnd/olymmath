---
tag: ER8NST5VBZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every natural number $n$, it holds that $f(n+1)=\frac{2 f(n)+3}{f(n)+2}$ and $f(0)=\frac{1}{4}$. Prove that for every natural number $n$, it holds that $0<f(n)<\sqrt{3}$.