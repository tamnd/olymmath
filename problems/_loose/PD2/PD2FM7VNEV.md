---
tag: PD2FM7VNEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1990 31st International Mathematical Olympiad Preliminary Question) Let $a, b$ be natural numbers, $1 \leqslant a \leqslant b, M=\left[\frac{a+b}{2}\right]$. The function $f: \mathbf{Z} \rightarrow \mathbf{Z}$

is defined as
$f(n)=\left\{\begin{array}{l}n+a, \text { if } n<M ; \\ n-b, \text { if } n \geqslant M .\end{array}\right.$
$f^{1}(n)=f(n), f^{i+1}(n)=f\left(f^{i}(n)\right), i=1,2, \cdots$
Let $k \geqslant 1$ be the smallest natural number such that $f^{k}(0)=0$, prove that:
$$
k=(a+b) /(a, b)
$$
