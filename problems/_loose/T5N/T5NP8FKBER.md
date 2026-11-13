---
tag: T5NP8FKBER
kind: problem
type: answer
answer: f(x)=\frac{1}{1+}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbf{R}^{+}$be the set of all positive real numbers. Find all functions $f$ : $\mathbf{R}^{+} \rightarrow \mathbf{R}^{+}$such that

$$
f(x) f(y f(x))=f(x+y)
$$

for all $x, y \in \mathbf{R}^{+}$.
