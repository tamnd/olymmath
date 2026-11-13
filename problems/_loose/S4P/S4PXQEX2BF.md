---
tag: S4PXQEX2BF
kind: problem
type: answer
answer: "8350"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set of integers
$$
A=\{1,2, \cdots, 100\} \text {. }
$$

Let the function $f: A \rightarrow A$ satisfy:
(1) For any $1 \leqslant i \leqslant 99$, we have
$$
|f(i)-f(i+1)| \leqslant 1 \text {; }
$$
(2) For any $1 \leqslant i \leqslant 100$, we have
$$
\begin{array}{l}
f(f(i))=100 . \\
\text { Find the minimum possible value of } \sum_{i=1}^{100} f(i) \text { . }
\end{array}
$$
