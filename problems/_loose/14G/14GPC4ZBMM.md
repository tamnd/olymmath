---
tag: 14GPC4ZBMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime number $n \ge 5$. Prove that for any natural number $a \le \frac{n}{2} $, we can search for natural number $b \le \frac{n}{2}$ so the number of non-negative integer solutions $(x, y)$ of the equation $ax+by=n$ to be odd*.

Clarification:
* For example when $n = 7, a = 3$, we can choose$ b = 1$ so that there number of solutions og $3x + y = 7$ to be $3$ (odd), namely: $(0, 7), (1, 4), (2, 1)$
