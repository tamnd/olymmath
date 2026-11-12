---
tag: XNG53NKE0T
kind: problem
type: answer
answer: y(x)=\frac{\operatorname{sh}x}{\operatorname{sh}1}-x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the Green's function, solve the boundary value problem

$$
\begin{gathered}
y^{\prime \prime}(x)-y(x)=x \\
y(0)=y(1)=0 .
\end{gathered}
$$
