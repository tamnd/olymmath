---
tag: S4G8ZBJBCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248249
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d$ be real numbers, such that $ab(c+d)=cd(a+b)$. Prove that $\frac{a+1}{a^2+3}+\frac{b+1}{b^2+3} \geq \frac{c-1}{c^2+3}+\frac{d-1}{d^2+3}$.
