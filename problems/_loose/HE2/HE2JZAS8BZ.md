---
tag: HE2JZAS8BZ
kind: problem
type: answer
answer: 6\times5^{2015}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n=d_{1} d_{2} \cdots d_{2017}$, where $d_{i} \in\{1,3,5,7,9\}(i=1,2, \cdots, 2017)$, and
$$
\begin{array}{l}
\sum_{i=1}^{1009} d_{i} d_{i+1} \equiv 1(\bmod 4), \\
\sum_{i=1010}^{2016} d_{i} d_{i+1} \equiv 1(\bmod 4) .
\end{array}
$$

Find the number of $n$ that satisfy the conditions.
