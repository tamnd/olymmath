---
tag: TDGJDTDF62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be the cubic polynomial
$$
f(x) = x^3 + bx^2 + cx + d,
$$
where $b$, $c$, and $d$ are real numbers. Let $x_1$, $x_2$, $\ldots\,$, $x_n$ be nonnegative numbers, and let $m$ be their average. Suppose that $m \ge - \dfrac{b}{2}\,$. Prove that
$$
\sum_{i = 1}^n f(x_i) \ge n f(m).
$$
