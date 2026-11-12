---
tag: 3BE8EW2AAH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h62471
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Consider the triangular array of numbers with $0,1,2,3,...$ along the sides and interior numbers obtained by adding the two adjacent numbers in the previous row. Rows $1$ through $6$ are shown.

\begin{tabular}{ccccccccccc} & & & & & 0 & & & & & & & & & 1 & & 1 & & & & & & & 2 & & 2 & & 2 & & & & & 3 & & 4 & & 4 & & 3 & & & 4 & & 7 & & 8 & & 7 & & 4 & 5 & & 11 & & 15 & & 15 & & 11 & & 5 \end{tabular}

Let $f(n)$ denote the sum of the numbers in row $n$ . What is the remainder when $f(100)$ is divided by $100$ ? $\textbf{(A)}\ 12 \textbf{(B)}\ 30 \textbf{(C)}\ 50 \textbf{(D)}\ 62 \textbf{(E)}\ 74$
