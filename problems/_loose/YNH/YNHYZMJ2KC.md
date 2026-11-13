---
tag: YNHYZMJ2KC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h607955
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118158
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2006
    source: hf-ai-mo-aops
    label: 2006 China Second Round Olympiad
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Given an integer $n\ge 2$ , define $M_0 (x_0, y_0)$ to be an intersection point of the parabola $y^2=nx-1$ and the line $y=x$ . Prove that for any positive integer $m$ , there exists an integer $k\ge 2$ such that $(x^m_0, y^m_0)$ is an intersection point of $y^2=mx-1$ and the line $y=x$ .
