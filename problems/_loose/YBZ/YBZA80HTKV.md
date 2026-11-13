---
tag: YBZA80HTKV
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be the function defined for $x\geq 0$ which satisfies the following conditions.
(a) $f(x)=\begin{cases}x \ \ \ \ \ \ \ \ ( 0\leq x<1) \\ 2-x \ \ \ (1\leq x <2) \end{cases}$

(b) $f(x+2n)=f(x) \ (n=1,2,\cdots)$

Find $\lim_{n\to\infty}\int_{0}^{2n}f(x)e^{-x}\ dx.$
