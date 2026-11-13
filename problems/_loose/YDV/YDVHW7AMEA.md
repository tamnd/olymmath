---
tag: YDVHW7AMEA
kind: problem
type: answer
answer: 61,77,93,99,122,124,154,186,198
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $S_{n}=\{0,1, \cdots, n-1\}\left(n \in \mathbf{Z}_{+}\right)$.

For a bijection $f: S_{n} \rightarrow S_{n}$, if $n \mid(a+b-c), a, b, c \in S_{n}$, then
$$
n \mid(f(a)+f(b)-f(c)) \text {. }
$$

Let the set of all solutions of $f$ be $T_{n}$. If $\left|T_{n}\right|=60$, find $n$.
