---
tag: V5F3KSDWXJ
kind: problem
type: answer
answer: a_{n}=\sqrt{n^{2}+1}-\sqrt{(n-1)^{2}+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence of positive numbers $\left\{a_{n}\right\}$ satisfy
$$
\begin{array}{l}
a_{1}=\sqrt{2}-1, \\
a_{n+1}=\frac{2 n+1}{S_{n}+S_{n+1}+2}(n=1,2, \cdots),
\end{array}
$$

where $S_{n}$ is the sum of the first $n$ terms of $a_{n}$. Then the general term formula of the sequence is $ $ .
