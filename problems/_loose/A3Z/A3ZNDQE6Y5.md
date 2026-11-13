---
tag: A3ZNDQE6Y5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35718
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1999
    source: hf-ai-mo-aops
    label: 1999 China Team Selection Test
---
For non-negative real numbers $x_1, x_2, \ldots, x_n$ which satisfy $x_1 + x_2 + \cdots + x_n = 1$ , find the largest possible value of $\sum_{j = 1}^{n} (x_j^{4} - x_j^{5})$ .
