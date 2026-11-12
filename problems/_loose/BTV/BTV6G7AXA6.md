---
tag: BTV6G7AXA6
kind: problem
type: answer
answer: c_{n}=\frac{(2n-2)!}{n!(n-1)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\sum_{k=1}^{\infty} c_{k} x^{k}$ be the generating function for the Catalan numbers, i.e., $c_{1}=1, c_{2}=c_{1} c_{1}$, and $c_{k}=c_{1} c_{k-1}+c_{2} c_{k-2}+\ldots+c_{k-1} c_{1}$ for $k \geqslant 3$.

a) Prove that $(f(x))^{2}=f(x)-x$.

b) Prove that $c_{n}=\frac{(2 n-2)!}{n!(n-1)!}$.
