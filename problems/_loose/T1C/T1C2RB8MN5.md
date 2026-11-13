---
tag: T1C2RB8MN5
kind: problem
type: answer
answer: No; for a = 8 and b = 13 the system has no solution.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Is it true that for any nonzero integer numbers $a$ and $b$ the system of equations
$$
\begin{cases}
\tan(13x) \tan(ay) = 1, \\
\tan(21x) \tan(by) = 1
\end{cases}
$$
has at least one solution?
