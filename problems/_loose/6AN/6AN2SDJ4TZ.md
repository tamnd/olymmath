---
tag: 6AN2SDJ4TZ
kind: problem
type: answer
answer: "576"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set $A=\{1,2, \cdots, 6\}$, the mapping $f: A \rightarrow A$ is a one-to-one mapping,
$$
\begin{array}{l}
f^{(2)}(x)=f(f(x)), \\
f^{(n+1)}(x)=f\left(f^{(n)}(x)\right)(x \geqslant 1) .
\end{array}
$$

Then the number of mappings $f$ that satisfy $f^{(12)}(x)=x$ for any $x \in A$ is . $ $
