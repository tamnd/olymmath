---
tag: 6YBHKYC7FD
kind: problem
type: answer
answer: "-47"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Subtract the second equation from the first:

$x^{2}-2 x+y^{4}-8 y^{3}+24 y^{2}-32 y=-17 \rightarrow(x-1)^{2}+(y-2)^{4}=0 \rightarrow\left\{\begin{array}{l}x=1 \\ y=2\end{array}\right.$

Then $z=x^{2}+y^{4}-8 y^{3}=1+16-64=-47$
