---
tag: KFT5XAJTBP
kind: problem
type: answer
answer: \frac{4}{2015}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and $z_{j}(j=1,2, \cdots, n)$ be complex numbers, such that
$$
\begin{array}{l}
\arg z_{j} \in[0, \pi],\left|z_{1}\right| \leqslant\left|z_{2}\right| \leqslant \cdots \leqslant\left|z_{n}\right| . \\
\text { If }\left|\prod_{j=1}^{k} z_{j}-1\right| \leqslant \frac{1}{2016}(k=1,2, \cdots, n),
\end{array}
$$

Prove: $\sum_{j=1}^{n}\left|z_{j}-1\right|<\frac{4}{2015}$.
