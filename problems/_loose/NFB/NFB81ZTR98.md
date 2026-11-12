---
tag: NFB81ZTR98
kind: problem
type: answer
answer: f(0)=0,(0)=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(New York, 76). Functions $f, g: R \rightarrow R$ are non-constant and satisfy two identities

$$
\begin{aligned}
& f(x+y)=f(x) g(y)+g(x) f(y) \\
& g(x+y)=g(x) g(y)-f(x) f(y)
\end{aligned}
$$

$x, y \in \mathbf{R}$. Find all possible values of $f(0)$ and $g(0)$.
