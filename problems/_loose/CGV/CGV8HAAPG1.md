---
tag: CGV8HAAPG1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a sequence of positive integers $\left\{a_{i}\right\}_{i=1}^{\infty}$ a good sequence if it is strictly increasing and $a_{n}<9000 n$. We call an integer $i \geq 1$ divisor-friendly if $a_{i} \mid \operatorname{lcm}\left[a_{1}, a_{2}, \cdots, a_{i-1}\right]$, otherwise it is called divisor-unfriendly.

Is it always true that: (1) there are infinitely many unfriendly indices; (2) there are infinitely many friendly indices
