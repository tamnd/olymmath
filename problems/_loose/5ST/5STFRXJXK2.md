---
tag: 5STFRXJXK2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h2222543
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45785
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Kazakhstan National Olympiad
---
Let $x_1, x_2, ... , x_n$ be a real numbers such that
1) $1 \le x_1, x_2, ... , x_n \le 160$ 2) $x^{2}_{i} + x^{2}_{j} + x^{2}_{k} \ge 2(x_ix_j + x_jx_k + x_kx_i)$ for all $1\le i < j < k \le n$ Find the largest possible $n$ .
