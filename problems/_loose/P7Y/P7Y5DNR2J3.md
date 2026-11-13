---
tag: P7Y5DNR2J3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a sequence of reals $\{a_n\}_{n\geq 0}$ satisfies $a_0 = 0$, $\frac{100}{101} <a_{100}<1$, and
$$2a_n - a_{n-1} -a_{n+1} \leq 2 (1-a_n )^3$$
for every $n\geq 1$.
(1) Define a sequence $b_n = a_n - \frac{n}{n+1}$. Prove that $b_n\leq b_{n+1}$ for any $n\geq 100$.
(2) Determine whether infinite series $\sum_{n=1}^\infty \frac{a_n}{n^2}$ converges or diverges.
