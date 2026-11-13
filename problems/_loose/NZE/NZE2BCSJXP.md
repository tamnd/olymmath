---
tag: NZE2BCSJXP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c$ be positive reals and sequences $\{a_{n}\},\{b_{n}\},\{c_{n}\}$ defined by $a_{k+1}=a_{k}+\frac{2}{b_{k}+c_{k}},b_{k+1}=b_{k}+\frac{2}{c_{k}+a_{k}},c_{k+1}=c_{k}+\frac{2}{a_{k}+b_{k}}$ for all $k=0,1,2,...$. Prove that $\lim_{k\to+\infty}a_{k}=\lim_{k\to+\infty}b_{k}=\lim_{k\to+\infty}c_{k}=+\infty$.
