---
tag: DTP50QZX4Z
kind: problem
type: answer
answer: a = 4, b = 2, c = 4/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
Three real numbers $a$, $b$, $c$ satisfy the equations
$$
\begin{align*}
a + 2b + 3c &= 12, \\
2ab + 3ac + 6bc &= 48.
\end{align*}
$$
Solve for $a$, $b$, $c$.
