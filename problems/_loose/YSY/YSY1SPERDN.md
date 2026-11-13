---
tag: YSY1SPERDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211522
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c$ be positive real numbers such that $ab+bc+ca=1$. Prove that
$$\sqrt[4]{\frac{\sqrt{3}}{a}+6\sqrt{3}b}+\sqrt[4]{\frac{\sqrt{3}}{b}+6\sqrt{3}c}+\sqrt[4]{\frac{\sqrt{3}}{c}+6\sqrt{3}a}\le\frac{1}{abc}$$
When does inequality hold?
