---
tag: YSA2TRQ1PA
kind: problem
type: answer
answer: kn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Promotion 4 Let $n$ be a positive integer, consider
$$
\begin{aligned}
S= & \left\{\left(x_{1}, x_{2}, \cdots, x_{k}\right) \mid x_{1}, x_{2}, \cdots, x_{k} \in\{0,\right. \\
& \left.1, \cdots, n\}, x_{1}+x_{2}+\cdots+x_{k}>0\right\}
\end{aligned}
$$

is a set of $(n+1)^{k}-1$ points in $k$-dimensional space. Try to find the minimum number of hyperplanes whose union contains $S$ but does not contain $(0,0, \cdots, 0)$.
