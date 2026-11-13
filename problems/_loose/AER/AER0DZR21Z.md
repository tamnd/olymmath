---
tag: AER0DZR21Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243287
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{x_n\}_n$ be a sequence of positive rational numbers, such that $x_1$ is a positive integer, and for all positive integers $n$.
$x_n = \frac{2(n - 1)}{n} x_{n-1}$, if $x_{n_1} \le 1$
$x_n = \frac{(n - 1)x_{n-1} - 1}{n}$ , if $x_{n_1} > 1$.
Prove that there exists a constant subsequence of $\{x_n\}_n$.
