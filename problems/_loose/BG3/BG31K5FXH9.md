---
tag: BG31K5FXH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given four numbers $x, y, z, t$, let $(a, b, c, d)$ be a permutation of $(x, y, z, t)$ and set $x_1 =|a- b|$, $y_1 = |b-c|$, $z_1 = |c-d|$, and $t_1 = |d -a|$. From $x_1, y_1, z_1, t_1$, form in the same fashion the numbers $x_2, y_2, z_2, t_2$, and so on. It is known that $x_n = x, y_n = y, z_n = z, t_n = t$ for some $n$. Find all possible values of $(x, y, z, t)$.
