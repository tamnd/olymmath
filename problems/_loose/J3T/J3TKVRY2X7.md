---
tag: J3TKVRY2X7
kind: problem
type: answer
answer: "1013"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest four-digit number $n$ for which the system

$$
\begin{aligned}
x^{3}+y^{3}+y^{2} x+x^{2} y & =n, \\
x^{2}+y^{2}+x+y & =n+1
\end{aligned}
$$

has only integer solutions.
