---
tag: VVRPSGBNW0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 3$. Let $A_{1}, A_{2}, \cdots, A_{n}$ (allowing overlaps) be points on the unit circle $\Omega$ with center $O$, and let $d_{k}=\overrightarrow{O A_{k}} \cdot \overrightarrow{A_{k-1} A_{k+1}}(k=1,2, \cdots, n)$, where $A_{0}=A_{n}, A_{n+1}=A_{1}$. Find the maximum value of $S=\left|d_{1}\right|+\left|d_{2}\right|+\cdots+\left|d_{n}\right|$.
