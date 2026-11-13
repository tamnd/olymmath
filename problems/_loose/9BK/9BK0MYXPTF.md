---
tag: 9BK0MYXPTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of polynomial $f_n(x)\ (n=0,1,2,\cdots)$ satisfies $f_0(x)=2,f_1(x)=x$,

$$f_n(x)=xf_{n-1}(x)-f_{n-2}(x),\ (n=2,3,4,\cdots)$$

Let $x_n\ (n\geqq 2)$ be the maximum real root of the equation $f_n(x)=0\ (|x|\leqq 2)$

Evaluate

$$\lim_{n\to\infty} n^2 \int_{x_n}^2 f_n(x)dx$$
