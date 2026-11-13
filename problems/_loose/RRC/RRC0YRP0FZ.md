---
tag: RRC0YRP0FZ
kind: problem
type: answer
answer: f(x)=(x)=\frac{3}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f, g: \mathbb{R}_{+}^{*} \rightarrow \mathbb{R}_{+}^{*}$ such that

$$
\forall x>0, \left\{\begin{array}{l}
g(f(x))=\frac{x}{x f(x)-2} \\
f(g(x))=\frac{x}{x g(x)-2}
\end{array} .\right.
$$
