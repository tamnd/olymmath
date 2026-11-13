---
tag: GDPVBQ39VQ
kind: problem
type: answer
answer: "2187"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A bulldozer is touring Pascal's triangle. It starts at the top of the triangle, at $\left(\begin{array}{l}0 \\ 0\end{array}\right)=1$. Each move, it travels to an adjacent positive integer, but can never return to a spot it has already visited. Moreover, if it has visited two numbers $a>b$, it may not visit $a+b$ or $a-b$. Finally, the bulldozer is confined to the first 140 rows of Pascal's triangle.

Prove that the bulldozer may visit at least 2017 numbers. (By convention, the $n$th row contains the entries $\left(\begin{array}{c}n-1 \\ k\end{array}\right)$ for $k=0, \ldots, n-1$, hence the $n$th row has $n$ entries.)
