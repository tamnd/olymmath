---
tag: N8KA5GZ14T
kind: problem
type: answer
answer: 1,0.2,2.1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{aligned}
& x+[y]+\{z\}=1.1 \\
& \{x\}+y+[z]=2.2 \\
& {[x]+\{y\}+z=3.3}
\end{aligned}
$$

where $[x]$ denotes the greatest integer not greater than $x$, and $\{x\}=x-[x]$.
