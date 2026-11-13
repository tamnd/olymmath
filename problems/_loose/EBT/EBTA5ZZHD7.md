---
tag: EBTA5ZZHD7
kind: problem
type: answer
answer: n^3 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$ and $c$ be complex numbers such that $abc = 1$. Find the value of the cubic root of

\begin{tabular}{|ccc|}
$b + n^3c$ & $n(c - b)$ & $n^2(b - c)$\\
$n^2(c - a)$ & $c + n^3a$ & $n(a - c)$\\
$n(b - a)$ & $n^2(a - b)$ & $a + n^3b$
\end{tabular}
