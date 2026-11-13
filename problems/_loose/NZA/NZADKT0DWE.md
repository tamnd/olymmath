---
tag: NZADKT0DWE
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest positive integer $n$, such that there exist 8 integers $x_{1}, x_{2}, x_{3}, x_{4}$ and $y_{1}, y_{2}, y_{3}, y_{4}$ satisfying:
$$
\{0,1, \cdots, n\} \subseteq\left\{\left|x_{i}-x_{j}\right| \mid 1 \leqslant i<j \leqslant 4\right\} \bigcup\left\{\left|y_{i}-y_{j}\right| \mid 1 \leqslant i<j \leqslant 4\right\} .
$$
