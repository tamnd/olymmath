---
tag: YTBWPFK2N7
kind: problem
type: answer
answer: f(n)=n^{k}(n\in{Z}_{+},k.ispositiveodd)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{Z}_{+} \rightarrow \mathbf{Z}_{+}$ such that for all $m, n \in \mathbf{Z}_{+}$, we have
$$
\begin{array}{l}
f(m n)=f(m) f(n), \\
(m+n) \mid(f(m)+f(n)) .{ }^{[1]}
\end{array}
$$
(2016, Turkey National Team Selection Exam)
