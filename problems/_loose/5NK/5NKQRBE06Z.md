---
tag: 5NKQRBE06Z
kind: problem
type: answer
answer: (,b,)=(1,1,-1),(1,-1,1),(-1,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(a, b, c)$ of real numbers for which

$$
\begin{aligned}
a+b+c & =1, \\
a b+b c+c a & =a b c .
\end{aligned}
$$
