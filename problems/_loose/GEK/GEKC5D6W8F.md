---
tag: GEKC5D6W8F
kind: problem
type: answer
answer: (3,26,7,13),(15,2,73,7)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruples $(a, b, c, d)$ of positive integers which satisfy

$$
\begin{aligned}
a b+2 a-b & =58 \\
b c+4 b+2 c & =300 \\
c d-6 c+4 d & =101
\end{aligned}
$$
