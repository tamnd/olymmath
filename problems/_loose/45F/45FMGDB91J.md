---
tag: 45FMGDB91J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h265482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3305
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2009
    source: hf-ai-mo-aops
    label: 2009 China Team Selection Test
---
Let $ x_{1},x_{2},\cdots,x_{m},y_{1},y_{2},\cdots,y_{n}$ be positive real numbers. Denote by $ X = \sum_{i = 1}^{m}x,Y = \sum_{j = 1}^{n}y.$ Prove that $ 2XY\sum_{i = 1}^{m}\sum_{j = 1}^{n}|x_{i} - y_{j}|\ge X^2\sum_{j = 1}^{n}\sum_{l = 1}^{n}|y_{i} - y_{l}| + Y^2\sum_{i = 1}^{m}\sum_{k = 1}^{m}|x_{i} - x_{k}|$
