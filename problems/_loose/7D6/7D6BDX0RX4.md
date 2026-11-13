---
tag: 7D6BDX0RX4
kind: problem
type: answer
answer: \frac{n(n+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Six. (20 points) Let $[x]$ denote the greatest integer not exceeding the real number $x$. Given
$$
\begin{array}{l}
a_{k}=\sum_{i=k^{2}}^{(k+1)^{2}-1} \frac{1}{i}(k=1,2, \cdots) . \\
\text { Find } \sum_{k=1}^{n}\left(\left[\frac{1}{a_{k}}\right]+\left[\frac{1}{a_{k}}+\frac{1}{2}\right]\right) .
\end{array}
$$
