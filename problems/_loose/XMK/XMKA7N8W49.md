---
tag: XMKA7N8W49
kind: problem
type: answer
answer: k^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \in \mathbb{N} \backslash\{1\}$. Calculate the sum of all numbers in the table

$$
\begin{array}{ccccc}
1 & 2 & 3 & \ldots & k \\
2 & 3 & 4 & \ldots & k+1 \\
3 & 4 & 5 & \ldots & k+2 . \\
. & . & . & . & . \\
k & k+1 & k+2 & \ldots & 2 k-1
\end{array}
$$
