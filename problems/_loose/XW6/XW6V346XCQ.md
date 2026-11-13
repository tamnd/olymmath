---
tag: XW6V346XCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{f_n\}_{n \ge 0}$ be the Fibonacci sequence, given by $f_0 = f_1 = 1$, and for all positive integers $n$ the recurrence $f_{n+1} = f_n + f_{n-1}$.
Let $a_n = f_{n+1}f_n$ for any non-negative integer $n$, and let $$P_n(X) = X^n + a_{n-1}X^{n-1} + ... + a_1X + a_0.$$
Prove that for all positive integers $n \ge 3$ the polynomial $P_n(X)$ is irreducible in $Z[X]$.
