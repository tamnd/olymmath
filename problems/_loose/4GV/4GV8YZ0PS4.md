---
tag: 4GV8YZ0PS4
kind: problem
type: answer
answer: y_{1}^{\\}=y_{1}+e^{y_{2}y_{1}^{\}},\quady_{2}^{\}=\ln(y_{1}+y_{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Reduce the system of equations to canonical form

$$
\left\{\begin{aligned}
y_{2} y_{1}^{\prime}-\ln \left(y_{1}^{\prime \prime}-y_{1}\right) & =0 \\
e^{y_{2}^{\prime}}-y_{1}-y_{2} & =0
\end{aligned}\right.
$$
