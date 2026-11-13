---
tag: QGZJCSHJK3
kind: problem
type: answer
answer: For\p=-3,\the\system\has\\unique\solution.\For\p\neq-3,\the\system\has\exactly\four\solutions
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the field of real numbers, solve the system of equations

$$
\begin{aligned}
& x+2 y+3 z=x^{2}-z^{2}+p \\
& y+2 z+3 x=y^{2}-x^{2}+p \\
& z+2 x+3 y=z^{2}-y^{2}+p
\end{aligned}
$$

where $p$ is a real parameter. Discuss the number of solutions with respect to the parameter $p$.
