---
tag: EM93YAHNFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a permutation $\sigma$ of the first $n$ positive integers friendly if and only if the following conditions are fulfilled:
(1) $\sigma(k + 1) \in \{2\sigma(k), 2\sigma(k) - 1, 2\sigma(k) - n, 2\sigma(k) - n - 1\}, \forall k \in \{1, 2, ..., n - 1\}$
(2) $\sigma(1) \in \{2 \sigma(n), 2\sigma(n) - 1, 2\sigma(n) - n, 2\sigma(n) - n - 1\}$.
Find all positive integers $n$ for which there exists such a friendly permutation of the first $n$ positive integers.
