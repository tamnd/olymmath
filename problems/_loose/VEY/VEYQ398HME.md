---
tag: VEYQ398HME
kind: problem
type: answer
answer: (1,2,1,2,\ldots,1,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=156970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 4$ be an integer. Find all positive real solutions to the following system of $2 n$ equations:
$$
\begin{aligned}
a_{1} & =\frac{1}{a_{2 n}}+\frac{1}{a_{2}}, & a_{2} & =a_{1}+a_{3} \\
a_{3} & =\frac{1}{a_{2}}+\frac{1}{a_{4}}, & a_{4} & =a_{3}+a_{5} \\
a_{5} & =\frac{1}{a_{4}}+\frac{1}{a_{6}}, & a_{6} & =a_{5}+a_{7} \\
& \vdots & & \vdots \\
a_{2 n-1} & =\frac{1}{a_{2 n-2}}+\frac{1}{a_{2 n}}, & a_{2 n} & =a_{2 n-1}+a_{1}
\end{aligned}
$$
