---
tag: V5ZNX6KHQ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 China Second Round
    url: https://artofproblemsolving.com/community/c6h2921391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35342
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2022
    source: hf-ai-mo-aops
    label: 2022 China Second Round
---
Let $a_1,a_2,\cdots ,a_{100}$ be non-negative integers such that $(1)$ There are positive integers $ k\leq 100$ such that $a_1\leq a_2\leq \cdots\leq a_{k}$ and $a_i=0$ $(i>k);$ $(2)$ $ a_1+a_2+a_3+\cdots +a_{100}=100;$ $(3)$ $ a_1+2a_2+3a_3+\cdots +100a_{100}=2022.$ Find the minimum of $ a_1+2^2a_2+3^2a_3+\cdots +100^2a_{100}.$
