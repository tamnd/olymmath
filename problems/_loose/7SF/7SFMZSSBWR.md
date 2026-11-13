---
tag: 7SFMZSSBWR
kind: problem
type: answer
answer: (x,y,u,v)=(9k,4k,3k,12k),k\in{N}^{*}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integer tuples $(x, y, u, v)$ that satisfy $\sqrt{x y}+\sqrt{u v}$ is a rational number, and $\left|\frac{x}{9}-\frac{y}{4}\right|=\left|\frac{u}{3}-\frac{v}{12}\right|=u v-x y$.
