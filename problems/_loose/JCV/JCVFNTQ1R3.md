---
tag: JCVFNTQ1R3
kind: problem
type: answer
answer: f(n)=n^{3}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all increasing functions $f: \mathbf{N} \rightarrow \mathbf{Z}$ satisfying:
$$
\begin{array}{l}
f(2)=7, \\
f(m n)=f(m)+f(n)+f(m) f(n) .
\end{array}
$$
(2014, Taiwan Mathematical Olympiad Training Camp)
