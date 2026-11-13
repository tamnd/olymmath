---
tag: RTKZ01ZEQJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange a strip of width 1 using rectangles of width 1 and lengths $a_{1}, a_{2}, a_{3}, \cdots \left(a_{1} \neq 1\right)$, which are placed tightly and without overlapping. Starting from the second rectangle, each rectangle is similar but not congruent to the rectangle formed by the previously arranged rectangles. After placing the first $n$ rectangles, the length of the strip covered is denoted as $S_{n}$. Does there exist a real number that is not exceeded by $S_{n}$? Prove your conclusion.
