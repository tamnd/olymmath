---
tag: WWPD903XD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2300923
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54912
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2016
    source: hf-ai-mo-aops
    label: 2016 239 Open Mathematical Olympiad
---
The sequences of natural numbers $p_n$ and $q_n$ are given such that $$ p_1 = 1,\ q_1 = 1,\ p_{n + 1} = 2q_n^2-p_n^2,\ q_{n + 1} = 2q_n^2+p_n^2 $$ Prove that $p_n$ and $q_m$ are coprime for any m and n.
