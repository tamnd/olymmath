---
tag: ZC9ZF6BFRA
kind: problem
type: answer
answer: n = \left\lceil \frac{2021 - u}{v} \right\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a real coefficient quadratic polynomial $f(x)$ in which the coefficient of the second-order term is positive, suppose that there is no real number $\alpha$ that satisfies $f(\alpha) = \alpha$.
Show that there exists a positive integer n that satisfies the following conditions.

If $n+1$ real numbers $a_0, a_1, ..., a_n$ satisfy $a_i = f(a_{i-1})$ for any integer $i$ between $1$ and $n$, then $a_n > 2021$ holds.
