---
tag: BS44TX87YZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any integer $\alpha$, there exist two types of point transformations on the plane:
(i) Transform each point $(x, y)$ to $(x, \alpha x+y)$;
(ii) Transform each point $(x, y)$ to $(x+\alpha y, y)$.
Question: Does there exist a non-square rhombus with all four vertices as integer points, which can be transformed through a series of the above transformations to:
(1) A square;
(2) A rectangle that is not a square?
