---
tag: BV86H5KTCR
kind: problem
type: answer
answer: \in{1,2,3,4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all real numbers $a$ for which there exist nonnegative real numbers $x_{1}, x_{2}, x_{3}, x_{4}$ that satisfy the following equations (1), (2), (3), (4):

$$
\begin{aligned}
x_{1}+x_{2}+x_{3}+x_{4} & =1 \\
x_{1}+2 x_{2}+3 x_{3}+4 x_{4} & =a \\
x_{1}+2^{2} x_{2}+3^{2} x_{3}+4^{2} x_{4} & =a^{2} \\
x_{1}+2^{3} x_{2}+3^{3} x_{3}+4^{3} x_{4} & =a^{3}
\end{aligned}
$$
