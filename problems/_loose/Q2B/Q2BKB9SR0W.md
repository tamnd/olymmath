---
tag: Q2BKB9SR0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77470
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{a}, \mathrm{b}, \mathrm{c}, \mathrm{d} > 0$ be real numbers such that $\mathrm{abcd} = 1$.

Prove that

$$
\frac{1}{a+b+2}+\frac{1}{b+c+2}+\frac{1}{c+d+2}+\frac{1}{d+a+2} \leqslant 1
$$
