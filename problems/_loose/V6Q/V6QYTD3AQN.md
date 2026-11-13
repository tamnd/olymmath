---
tag: V6QYTD3AQN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3206415
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1605
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2024
    source: hf-ai-mo-aops
    label: 2024 China National Olympiad
---
Find the largest real number $c$ such that $$ \sum_{i=1}^{n}\sum_{j=1}^{n}(n-|i-j|)x_ix_j \geq c\sum_{j=1}^{n}x^2_i $$ for any positive integer $n $ and any real numbers $x_1,x_2,\dots,x_n.$
