---
tag: NGP3WKJNK8
kind: problem
type: answer
answer: f(x)=\frac{1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f: \mathbf{R}_{+}^{\rightarrow} \mathbf{R}_{+}$, and satisfies the conditions:
(1) For any $x, y \in \mathbf{R}_{+}$, we have
$$
f(x f(y))=y(x) \text {; }
$$
(2) As $x \rightarrow+\infty$, $f(x) \rightarrow 0$.

Try to find the function $f(x)$.
