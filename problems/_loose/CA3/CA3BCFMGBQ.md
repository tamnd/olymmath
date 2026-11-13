---
tag: CA3BCFMGBQ
kind: problem
type: answer
answer: 2(3-\sqrt{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=x^{2}-2$, let the tangent line of the curve $y=f(x)$ at point $A\left(x_{n}, f\left(x_{n}\right)\right), n \in \mathbf{N}^{*}$ intersect the $x$-axis at point $B\left(x_{n+1}, 0\right), n \in$ $\mathbf{N}^{*}$, and $x_{1}=3$.
(1) Prove that $x_{n}>\sqrt{2}, n \in \mathbf{N}^{*}$;
(2) Let $b_{n}=x_{n}-\sqrt{2}$, and the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$ be $T_{n}$, prove that $T_{n}<$ $2(3-\sqrt{2})$.
