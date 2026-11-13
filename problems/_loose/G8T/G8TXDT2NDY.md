---
tag: G8TXDT2NDY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d$ be reals such that $a \ge b \ge c \ge d$ and
$$
(a - b)^3 + (b - c)^3 + (c - d)^3 - 2(d - a)^3 - 12(a - b)^2 - 12(b - c)^2 - 12(c - d)^2 + 12(d - a)^2 - 2020(a - b)(b - c)(c - d)(d - a) = 1536.
$$
Find the minimum possible value of $d - a$.
