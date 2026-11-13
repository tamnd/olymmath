---
tag: FAVHFYBZTA
kind: problem
type: answer
answer: C(n)=\frac{1}{[1,2,\cdots,n]}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, find the largest real number $C(n)$ satisfying the following inequality,
$$
C(n) \leqslant\left|\frac{f(a)-f(b)}{a-b}\right|,
$$

where $f$ is a polynomial of degree $n$ and $f: \mathbf{Z} \rightarrow \mathbf{Z}$, $a, b \in \mathbf{Z}, f(a) \neq f(b)$
