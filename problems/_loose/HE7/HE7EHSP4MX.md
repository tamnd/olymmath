---
tag: HE7EHSP4MX
kind: problem
type: answer
answer: (1;3)(x_{0};-1)with-4\leqx_{0}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All pairs $(x ; y)$ are to be found that satisfy the system of equations

$$
\begin{aligned}
& |y-x|=|x+1| \\
& \frac{y-3}{4}=\left[\frac{x-1}{5}\right]
\end{aligned}
$$

where $[a]$ is an integer with $a-1<[a] \leq a$.
