---
tag: 409QS2FCVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3207009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1607
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205083
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
Let $a_1, a_2, \ldots, a_{2023}$ be nonnegative real numbers such that $a_1 + a_2 + \ldots + a_{2023} = 100$ . Let $A = \left \{ (i,j) \mid 1 \leqslant i \leqslant j \leqslant 2023, a_ia_j \geqslant 1 \right\}$ . Prove that $|A| \leqslant 5050$ and determine when the equality holds.

*Proposed by Yunhao Fu*
