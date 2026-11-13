---
tag: HN7WGMG1DD
kind: problem
type: answer
answer: \frac{n}{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$, find the largest constant $C_{n}$, such that for any real numbers $a_{1}, a_{2}, \cdots, a_{n}, a_{1}+a_{2}+\cdots+a_{n}=0$, we have $\sum_{i=1}^{n} \min \left\{a_{i}, a_{i+1}\right\} \leqslant C_{n} \cdot \min _{1 \leqslant i \leqslant n} a_{i}$ (here we assume $a_{n+1}=a_{1}$ ).
