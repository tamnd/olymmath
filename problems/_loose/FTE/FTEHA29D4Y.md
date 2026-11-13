---
tag: FTEHA29D4Y
kind: problem
type: answer
answer: \\frac{\sqrt{2}}{2},\\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If real numbers $a, b, c, d, e$ satisfy the system of equations:
$$
\left\{\begin{array}{l}
a b+a c+a d+a e=-1, \\
b c+b d+b e+b a=-1, \\
c d+c e+c a+c b=-1, \\
d e+d a+d b+d c=-1, \\
e a+e b+e c+e d=-1,
\end{array}\right.
$$

Find all possible values of $a$.
