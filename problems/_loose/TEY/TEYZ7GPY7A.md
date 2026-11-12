---
tag: TEYZ7GPY7A
kind: problem
type: answer
answer: S=(1-)\sqrt{1-}for\leqslant0;S=1-2afor0<<1/2;S=0for\geqslant1/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a number $a$. Find the minimum value of the area of a rectangle with sides parallel to the coordinate axes $O x$ and $O y$ and containing the figure defined by the system of inequalities

$$
\left\{\begin{array}{l}
y \leqslant -x^{2} \\
y \geqslant x^{2}-2 x+a
\end{array}\right.
$$
