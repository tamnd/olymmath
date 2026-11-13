---
tag: HG8VXVPB2G
kind: problem
type: answer
answer: '[\frac{n(n-1)}{3}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$. Find the largest integer $M$, such that for any positive integers $a_{1}, a_{2}, \cdots, a_{n}$, we have
$$
\begin{array}{l}
{\left[\sqrt{a_{1}}\right]+\left[\sqrt{a_{2}}\right]+\cdots+\left[\sqrt{a_{n}}\right]} \\
\geqslant\left[\sqrt{a_{1}+a_{2}+\cdots+a_{n}+\operatorname{Min}\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}}\right],
\end{array}
$$

where $[x]$ denotes the greatest integer not exceeding the real number $x$.
