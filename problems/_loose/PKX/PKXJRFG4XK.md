---
tag: PKXJRFG4XK
kind: problem
type: answer
answer: \begin{pmatrix}1,&1,&3,&3,&6,&6;\\2,&5,&-2,&3,&-5,&-3;\\3,&-3,&5,&-5,&2,&-2\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{aligned}
3 x+2 y+z & =10 \\
3 x^{2}+4 x y+2 x z+y^{2}+y z & =27 \\
x^{3}+2 x^{2} y+x^{2} z+x y^{2}+x y z & =18
\end{aligned}
$$
