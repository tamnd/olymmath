---
tag: 9255WAGHRQ
kind: problem
type: answer
answer: f(x)=^{x}(b\neq0,>0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{Q} \rightarrow \mathbf{R} \backslash\{0\}$, such that for any rational numbers $x, y$, we have
$$
\begin{array}{l}
f^{2}(x) f(2 y)+f^{2}(y) f(2 x) \\
=2 f(x) f(y) f(x+y) .
\end{array}
$$
$(2015$, Taiwan Mathematical Olympiad Training Camp)
