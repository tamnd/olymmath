---
tag: MAXS604JWT
kind: problem
type: answer
answer: \begin{pmatrix}3&\cdot&3&=9\\+&\cdot&&-\\4&\cdot&2&=8\\\hline7&-&6&=1\\\hline\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{array}{ccccc}
\mathrm{A} & \cdot & \mathrm{A} & = & \mathrm{B} \\
+ & & \cdot & & - \\
\mathrm{C} & \cdot & \mathrm{D} & = & \mathrm{E} \\
\hline \mathrm{F} & -\mathrm{G} & = & \mathrm{H}
\end{array}
$$

In the cryptogram above, digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) are to be entered for the letters such that the same digits stand for the same letters and all the given arithmetic operations are correctly calculated.

Determine whether there is such an entry, whether it is the only one, and what it is in this case!
