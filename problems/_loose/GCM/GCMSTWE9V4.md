---
tag: GCMSTWE9V4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
For integers $a$ and $n > 0$, we say that $a$ is *n-expressible* if it can be written as a sum of distinct positive divisors of $n$. The natural number $n$ is *good* if $a$ being *n-expressible* implies $a-1$ being *n-expressible* for all $a \ge 1$.
Determine for which $n$, both $n!$ and $n^n$ are good.
