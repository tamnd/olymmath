---
tag: HPK54ZYDZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n, k$ be non-negative integers, and $a$ be a positive integer. Let
$$
f(x)=\left[\frac{n+k+x}{a}\right]-\left[\frac{n+x}{a}\right]-\left[\frac{k+x}{a}\right]+\left[\frac{x}{a}\right],
$$

Prove that for any non-negative integer $m$, we have
$$
f(0)+f(1)+\cdots+f(m) \geqslant 0 .
$$
