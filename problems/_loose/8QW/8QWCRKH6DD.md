---
tag: 8QWCRKH6DD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix

$$
A=\left(\begin{array}{ccc}
1 & a & h_{a} h_{b} \\
1 & b & h_{b} h_{c} \\
1 & c & h_{c} h_{a}
\end{array}\right)
$$

where $a, b, c$ denote the lengths of the sides of a triangle, and $h_{a}, h_{b}, h_{c}$ denote the lengths of the altitudes of the triangle. Show that $\operatorname{det} A \geqslant 0$. Under what conditions do we have $\operatorname{det} A=0$?
