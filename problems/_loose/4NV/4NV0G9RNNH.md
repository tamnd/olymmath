---
tag: 4NV0G9RNNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h2937275
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49163
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154026
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2022
    source: hf-ai-mo-aops
    label: 2022 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand New Zealand Mathematical Olympiad
---
Let $S$ be a set of $10$ positive integers. Prove that one can find two disjoint subsets $A =\{a_1, ..., a_k\}$ and $B = \{b_1, ... , b_k\}$ of $S$ with $|A| = |B|$ such that the sums $x =\frac{1}{a_1}+ ... +\frac{1}{a_k}$ and $y =\frac{1}{b_1}+ ... +\frac{1}{b_k}$ differ by less than $0.01$ , i.e., $|x - y| < 1/100$ .
