---
tag: QB3DKMXR9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1259107
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12397
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2015
    source: hf-ai-mo-aops
    label: 2015 Canadian Mathematical Olympiad Qualification
---
A $(0_x, 1_y, 2_z)$ -string is an infinite ternary string such that:

- If there is a $0$ in position $i$ then there is a $1$ in position $i + x$ ,
- if there is a $1$ in position $j$ then there is a $2$ in position $j + y$ ,
- if there is a $2$ in position $k$ then there is a $0$ in position $k + z$ .

For how many ordered triples of positive integers $(x, y, z)$ with $x, y, z \leq 100$ does there exist $(0_x, 1_y, 2_z)$ -string?
