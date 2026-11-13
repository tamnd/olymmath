---
tag: ABK8MV8F1D
kind: problem
type: answer
answer: S_{n}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113492
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f(x)$ defined on $\mathbf{R}$ that satisfies
$$
f(1)=\frac{10}{3} \text {, }
$$

and for any real numbers $x, y$, it always holds that
$$
f(x) f(y)=f(x+y)+f(x-y) \text {. }
$$

Let the sequence $\left\{a_{n}\right\}$ satisfy
$$
a_{n}=3 f(n)-f(n-1)\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) Let $b_{n}=\frac{24 a_{n}}{\left(3 a_{n}-8\right)^{2}}\left(n \in \mathbf{Z}_{+}\right)$, and $S_{n}$ be the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$. Prove: $S_{n}<1$.
