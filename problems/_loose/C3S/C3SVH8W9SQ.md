---
tag: C3SVH8W9SQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038299
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29035
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
Find all positive integers $n$ for which the following statement holds:
For any two polynomials $P(x)$ and $Q(x)$ of degree $n$ there exist monomials $ax^k$ and $bx^{ell}, 0 \le k,\ ell \le n$ , such that the graphs of $P(x) + ax^k$ and $Q(x) + bx^{ell}$ have no common points.
