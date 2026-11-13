---
tag: SHFKEWAY01
kind: problem
type: answer
answer: (1;1),(1;-1),(-1;1),(-1;-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine for each integer $k$ all pairs $(x ; y)$ of integers that satisfy the system of the following two equations (1), (2):

$$
\begin{aligned}
& x^{2}+k \cdot y^{2}=4 \\
& k \cdot x^{2}-y^{2}=2
\end{aligned}
$$
