---
tag: M4VHCNRTN8
kind: problem
type: answer
answer: x_i = 1 \quad \forall i
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 2$. Solve the following system of equations:
$
\begin{cases}
\ x_1|x_1| &= x_2|x_2| + (x_1-1)|x_1-1| \\
\ x_2|x_2| &= x_3|x_3| + (x_2-1)|x_2-1| \\
&\dots \\
\ x_n|x_n| &= x_1|x_1| + (x_n-1)|x_n-1|. \\
\end{cases}
$
