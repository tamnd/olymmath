---
tag: PY1972ATTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2567037
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39074
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1986
    source: hf-ai-mo-aops
    label: 1986 French Mathematical Olympiad
---
(a) Prove or find a counter-example: For every two complex numbers $z,w$ the following inequality holds: $$ |z|+|w|\le|z+w|+|z-w|. $$ (b) Prove that for all $z_1,z_2,z_3,z_4\in\mathbb C$ : $$ \sum_{k=1}^4|z_k|\le\sum_{1\le i<j\le4}|z_i+z_j|. $$
