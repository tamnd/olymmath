---
tag: 4WQF28QY6S
kind: problem
type: answer
answer: \frac{1}{-},0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of four equations with four unknowns

$$
\begin{array}{rr}
|a-b| y+|a-c| z+|a-d| t & =1 \\
|b-a| x+|b-c| z+|b-d| t & =1 \\
|c-a| x+|c-b| y+|c-d| t & =1 \\
|d-a| x+|d-b| y+|d-c| z & =1
\end{array}
$$

where $a, b, c, d$ are some four pairwise distinct real numbers.
