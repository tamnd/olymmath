---
tag: HRRRHXGDFG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p\in\mathbb N,f:[0,1]\to(0,\infty)$ be a continuous function and
$$a_n=\int^1_0x^p\sqrt[n]{f(x)}dx,n\in\mathbb N,n\ge2.$$
Demonstrate that:
a) $\lim_{n\to\infty}a_n=\frac1{p+1}$
b) $\lim_{n\to\infty}((p+1)a_n)^n=\exp\left((p+1)\int^1_0x^p\ln f(x)dx\right)$

*Proposed by Nicolae Papacu*
