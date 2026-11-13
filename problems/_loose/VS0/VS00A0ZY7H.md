---
tag: VS00A0ZY7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The arithmetic function $\nu$ is defined by $$\nu (n) = \begin{cases}0, \,\,\,\, n=1 \\ k, \,\,\,\, n=p_1^{a_1} p_2^{a_2} ... p_k^{a_k}\end{cases}$$, where $n=p_1^{a_1} p_2^{a_2} ... p_k^{a_k}$ represents the prime factorization of the number. Prove that for any naturals $m,n$, $$\tau (n^m) = \sum_{d | n} m^{\nu (d)}.$$ *(PP-nine)*
