---
tag: S94J3JYSGV
kind: problem
type: answer
answer: 3\times2^{2013}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four. (50 points) Let the sequence $\left\{a_{n}\right\}$ satisfy
$$
\begin{array}{l}
a_{1}=1, a_{2}=3, \\
a_{n}=3 a_{n-1}-a_{n-2}\left(n \in \mathbf{Z}_{+}, n \geqslant 3\right) .
\end{array}
$$

Does there exist a positive integer $n$ such that $2^{2016} \| a_{n}$, $\left(2^{2016} \mid a_{n}\right.$, and $\left.2^{2017} \nmid a_{n}\right)$? If it exists, find the smallest positive integer $n$; if not, explain the reason.
