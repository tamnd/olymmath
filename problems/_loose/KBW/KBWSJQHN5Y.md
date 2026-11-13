---
tag: KBWSJQHN5Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$, and $c$ be positive integers such that $gcd(a, b) = 1$. Sequence $\{u_k\}$, is given such that $u_0 = 0$, $u_1 = 1$, and u$_{k+2} = au_{k+1} + bu_k$ for all $k \ge 0$. Let $m$ be the least positive integer such that $c | u_m$ and $n$ be an arbitrary positive integer such that $c | u_n$. Show that $m | n$.
