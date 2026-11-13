---
tag: RD1A3BBZ64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that the following equations hold for positive integers $x$, $y$, and $n$, where $n>18$:
\begin{align*}
x+3y&\equiv7\pmod{n}\\
2x+2y&\equiv18\pmod{n}\\
3x+y&\equiv7\pmod{n}
\end{align*}
Compute the smallest nonnegative integer $a$ such that $2x\equiv a\pmod{n}$.
