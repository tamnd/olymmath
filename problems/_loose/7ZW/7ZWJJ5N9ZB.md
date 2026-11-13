---
tag: 7ZWJJ5N9ZB
kind: problem
type: answer
answer: (1,1,1),(-1,-1,-1),(2,2,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of real numbers $(x, y, z)$ for which

$$
\begin{aligned}
& x(x y-1)=2(y z-1) \\
& y(y z-1)=2(z x-1) \\
& z(z x-1)=2(x y-1)
\end{aligned}
$$
