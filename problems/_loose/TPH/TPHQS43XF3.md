---
tag: TPHQS43XF3
kind: problem
type: answer
answer: All permutations of (1, 0, 0) and (-1, 0, 0).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real solutions of the system
$$
\begin{cases}
|x + y + z| = 1 \\
|x| + |y| + |z| = 1 \\
|x - y| + |y - z| + |z - x| = 2.
\end{cases}
$$
