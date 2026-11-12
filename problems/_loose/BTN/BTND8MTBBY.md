---
tag: BTND8MTBBY
kind: problem
type: answer
answer: "-6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eight numbers $a_{1}, a_{2}, a_{3}, a_{4}$ and $b_{1}, b_{2}, b_{3}, b_{4}$ satisfy the relations

$$
\left\{\begin{array}{c}
a_{1} b_{1}+a_{2} b_{3}=1 \\
a_{1} b_{2}+a_{2} b_{4}=0 \\
a_{3} b_{1}+a_{4} b_{3}=0 \\
a_{3} b_{2}+a_{4} b_{4}=1
\end{array}\right.
$$

It is known that $a_{2} b_{3}=7$. Find $a_{4} b_{4}$.
