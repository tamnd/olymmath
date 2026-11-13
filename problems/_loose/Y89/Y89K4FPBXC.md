---
tag: Y89K4FPBXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011156
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1991
    source: hf-ai-mo-aops
    label: 1991 Romania Team Selection Test
---
A sequence $(a_n)$ of positive integers satisfies $(a_m,a_n) = a_{(m,n)}$ for all $m,n$ .
Prove that there is a unique sequence $(b_n)$ of positive integers such that $a_n = \prod_{d|n} b_d$
