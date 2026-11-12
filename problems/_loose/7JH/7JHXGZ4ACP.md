---
tag: 7JHXGZ4ACP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a 4×4 square table, in each cell of which there is a "+" or "-" sign:

$$
\begin{aligned}
& +-++ \\
& ++++ \\
& ++++ \\
& +-++
\end{aligned}
$$

In one move, you can change the signs to their opposites in any row or any column. Is it possible to get a table of all pluses after several moves?
