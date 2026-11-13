---
tag: KB0GHE656G
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(x)$ be a polynomial of degree $3n$, satisfying
$$
\begin{array}{c}
p(0)=p(3)=\cdots=p(3 n)=2, \\
p(1)=p(4)=\cdots=p(3 n-2)=1, \\
p(2)=p(5)=\cdots=p(3 n-1)=0,
\end{array}
$$

and $p(3 n+1)=730$, find $n$.
