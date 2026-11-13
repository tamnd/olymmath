---
tag: KRC70WQJTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $a, b, c$, such that for any real numbers $u, v (0 \leqslant u < v \leqslant 1)$, there exists a positive integer $n$, such that
$$
\left\{\sqrt{a n^{2} + b n + c}\right\} \in (u, v).
$$
