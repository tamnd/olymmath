---
tag: Z3E6K2NT0E
kind: problem
type: answer
answer: (x,y,z)\in{(0,0,0),(\frac{1}{7},0,0),(0,\frac{1}{7},0),(0,0,\frac{1}{7})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the domain of non-negative real numbers solve the system of equations

$$
\begin{aligned}
\lfloor 3 x+5 y+7 z\rfloor & =7 z, \\
\lfloor 3 y+5 z+7 x\rfloor & =7 x, \\
\lfloor 3 z+5 x+7 y\rfloor & =7 y .
\end{aligned}
$$

(Tomáš Bárta)
