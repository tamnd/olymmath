---
tag: 18RCRFS25T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2995348
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2011
    source: hf-ai-mo-aops
    label: 2011 Argentina National Olympiad
---
For $k=1,2,\ldots ,2011$ we denote $S_k=\frac{1}{k}+\frac{1}{k+1}+\cdots +\frac{1}{2011}$ .
Compute the sum $S_1+S_1^2+S_2^2+\cdots +S_{2011}^2$ .
