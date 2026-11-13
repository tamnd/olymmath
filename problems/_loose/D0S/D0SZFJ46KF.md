---
tag: D0SZFJ46KF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60538
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252616
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2013
    source: hf-ai-mo-aops
    label: 2013 Switzerland - Final Round
---
Find all triples $(a, b, c)$ of natural numbers such that the sets $$ \{ gcd (a, b), gcd(b, c), gcd(c, a), lcm (a, b), lcm (b, c), lcm (c, a)\} $$ and $$ \{2, 3, 5, 30, 60\} $$ are the same.

Remark: For example, the sets $\{1, 2013\}$ and $\{1, 1, 2013\}$ are equal.
