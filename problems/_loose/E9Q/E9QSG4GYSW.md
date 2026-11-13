---
tag: E9QSG4GYSW
kind: problem
type: answer
answer: 2k^{2}+k-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a fixed integer greater than 1, $m=$ $4 k^{2}-5$. Prove: There exist positive integers $a, b$, such that the sequence $\left\{x_{n}\right\}$ satisfies
$$
\begin{array}{l}
x_{0}=a, x_{1}=b, \\
x_{n+2}=x_{n+1}+x_{n}(n=0,1, \cdots),
\end{array}
$$

all of whose terms are coprime with $m$.
