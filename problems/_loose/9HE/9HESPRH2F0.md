---
tag: 9HESPRH2F0
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $\{1,2,3, \ldots, 20\}$ is divided into two disjoint subsets $A=\left\{a_{1}, a_{2}, \ldots, a_{10}\right\}$ and $B=\left\{b_{1}, b_{2}, \ldots, b_{10}\right\}$, such that

$$
a_{1}>a_{2}>\ldots>a_{10} \text { and } b_{1}<b_{2}<\ldots<b_{10}
$$

Prove that

$$
\left|a_{1}-b_{1}\right|+\left|a_{2}-b_{2}\right|+\left|a_{3}-b_{3}\right|+\ldots+\left|a_{10}-b_{10}\right|=100
$$
