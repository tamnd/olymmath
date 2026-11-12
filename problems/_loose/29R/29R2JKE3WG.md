---
tag: 29R2JKE3WG
kind: problem
type: answer
answer: "-3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Minimize $\boldsymbol{F}=\boldsymbol{x}_{2}-\boldsymbol{x}_{1}$ for non-negative $x_{1}$ and $x_{2}$, satisfying the system of constraints:

$$
\left\{\begin{aligned}
-2 x_{1}+x_{2}+x_{3} & =2 \\
x_{1}-2 x_{2}+x_{4} & =2 \\
x_{1}+x_{2}+x_{5} & =5
\end{aligned}\right.
$$
