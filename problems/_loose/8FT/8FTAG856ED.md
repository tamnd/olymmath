---
tag: 8FTAG856ED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287200
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2005
    source: hf-ai-mo-aops
    label: 2005 Irish Math Olympiad
---
Determine the number of arrangements $ a_1,a_2,...,a_{10}$ of the numbers $ 1,2,...,10$ such that $ a_i>a_{2i}$ for $ 1 \le i \le 5$ and $ a_i>a_{2i+1}$ for $ 1 \le i \le 4$ .
