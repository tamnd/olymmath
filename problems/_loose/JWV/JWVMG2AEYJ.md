---
tag: JWVMG2AEYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h527808
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9974
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
If $X_i$ is the answer to problem $i$ for $1 \le i \le 12$ , find the minimum possible value of $\sum_{n=1}^{12} (-1)^n X_n$ .

*Proposed by Evan Chen, Lewis Chen*
