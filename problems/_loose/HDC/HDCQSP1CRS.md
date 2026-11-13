---
tag: HDCQSP1CRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the system of equations
$$
\left\{\begin{array}{l}
y-2 x-a=0 . \\
y^{2}-x y+x^{2}-b=0 .
\end{array}\right.
$$

where $a, b$ are integers, and $x$ and $y$ are unknowns.
Prove that if this system of equations has a rational solution, then this rational solution must be an integer.
(Hungarian Mathematical Olympiad, 1917)
