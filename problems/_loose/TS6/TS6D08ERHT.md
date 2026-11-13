---
tag: TS6D08ERHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h401375
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2010
    source: hf-ai-mo-aops
    label: 2010 Romania National Olympiad
---
Let $a\in \mathbb{R}_+$ and define the sequence of real numbers $(x_n)_n$ by $x_1=a$ and $x_{n+1}=\left|x_n-\frac{1}{n}\right|,\ n\ge 1$ . Prove that the sequence is convergent and find it's limit.
