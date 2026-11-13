---
tag: G6CYX20HGM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $m(\ge 2$) is given. From circle $C_1$ with a radius 1, construct $C_2, C_3, C_4, ... $ through following acts:
In the $i$th act, select a circle $P_i$ inside $C_i$ with a area $\frac{1}{m}$ of $C_i$. If such circle dosen't exist, the act ends. If not, let $C_{i+1}$ a difference of sets $C_i -P_i$.
Prove that this act ends within a finite number of times.
