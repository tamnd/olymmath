---
tag: AYM0BW4XWN
kind: problem
type: answer
answer: "29"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x, y, z$ be the number of students in the categories of biology, physics, and chemistry, respectively. Then, according to the problem, we get the system of equations:

$$
\left\{\begin{array} { l }
{ 5 x = 2 ( y + z ) , } \\
{ 7 z = 3 ( x + y ) . }
\end{array} \Rightarrow \left\{\begin{array} { l }
{ 5 x - 2 y = 2 z , } \\
{ 3 x + 3 y = 7 z }
\end{array} \Rightarrow \left\{\begin{array}{l}
21 x=20 z \\
21 y=29 z
\end{array}\right.\right.\right.
$$

This means that the minimum values can only be: $x=20, y=29$, $z=21$.
