---
tag: W5FBAQ7HAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1882724
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55378
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1982
    source: hf-ai-mo-aops
    label: 1982 All Soviet Union Mathematical Olympiad
---
Prove that the following inequality holds for all real $a$ and natural $n$ : $$ |a| \cdot |a-1|\cdot |a-2|\cdot ...\cdot |a-n| \ge \frac{n!F(a)}{2n} $$ $F(a)$ is the distance from $a$ to the closest integer.
