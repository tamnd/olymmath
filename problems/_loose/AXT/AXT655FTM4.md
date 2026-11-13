---
tag: AXT655FTM4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ where all terms are positive integers, and $1<a_{1}<a_{2}<\cdots<a_{n}<\cdots$. Let $S=\sum_{k=1}^{n-1}\left[a_{k}, a_{k+1}\right]+\sum_{k=1}^{n} a_{k}, t=\max _{1 \leqslant k \leqslant n}\left\{a_{k}-a_{k-1}\right\}$, where $[a, b]$ denotes the least common multiple of $a$ and $b$, and it is agreed that $a_{0}=0$. Prove: $\frac{1}{t} \sum_{k=1}^{n} a_{k}^{2} \leqslant S \leqslant \sum_{k=1}^{n} a_{k}^{2}-2$, and specify the conditions under which each equality holds.
