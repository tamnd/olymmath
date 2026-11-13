---
tag: GSRVDZ61GK
kind: problem
type: answer
answer: f(x) = cx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all function $f,g: \mathbb{Q} \to \mathbb{Q}$ such that
$$\begin{array}{l}
f\left( {g\left( x \right) - g\left( y \right)} \right) = f\left( {g\left( x \right)} \right) - y \\
g\left( {f\left( x \right) - f\left( y \right)} \right) = g\left( {f\left( x \right)} \right) - y \\
\end{array}$$
for all $x,y \in \mathbb{Q}$.
