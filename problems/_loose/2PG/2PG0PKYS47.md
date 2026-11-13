---
tag: 2PG0PKYS47
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, n \geq 2$ be positive integers. Each entry of an $m \times n$ grid contains a real number in the range $[-1,1]$, i.e. between -1 and 1 inclusively. The grid also has the property that the sum of the four entries in every $2 \times 2$ subgrid is equal to 0 . (A $2 \times 2$ subgrid is the intersection of two adjacent rows and two adjacent columns of the original grid.) Let $S$ be the sum of all of the entries in the grid.
a. Suppose $m=6$ and $n=6$. Explain why $S=0$.
b. Suppose $m=3$ and $n=3$. If the elements of the grid are
\begin{tabular}{|l|l|l|}
\hline$a$ & $b$ & $c$ \\
\hline$d$ & $e$ & $f$ \\
\hline$g$ & $h$ & $i$ \\
\hline
\end{tabular}
show that $S+e=a+i=c+g$.
c. Suppose $m=7$ and $n=7$. Determine the maximum possible value of $S$.
