---
tag: QVMWQY734B
kind: problem
type: answer
answer: "630"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f: \mathbf{N} \rightarrow \mathbf{Z}$ satisfies for any natural number $n$,
$$
\begin{array}{l}
|f(n)|=n, \text { and } 0 \leqslant \sum_{k=1}^{n} f(k)<2 n . \\
\text { Find } \sum_{n=1}^{2019} f(n) .
\end{array}
$$
