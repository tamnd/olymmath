---
tag: FA5DK58SFE
kind: problem
type: answer
answer: "4.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6 Consider a rectangular array of single digits $d_{i, j}$ with 10 rows and 7 columns, such that $d_{i+1, j}-d_{i, j}$ is always 1 or -9 for all $1 \leq i \leq 9$ and all $1 \leq j \leq 7$, as in the example below. For $1 \leq i \leq 10$, let $m_{i}$ be the median of $d_{i, 1}, \ldots, d_{i, 7}$. Determine the least and greatest possible values of the mean of $m_{1}, m_{2}, \ldots, m_{10}$.
Example:
\begin{tabular}{lcccccccc}
& $d_{i, 1}$ & $d_{i, 2}$ & $d_{i, 3}$ & $d_{i, 4}$ & $d_{i, 5}$ & $d_{i, 6}$ & $d_{i, 7}$ & $m_{i}$ \\
$i=1$ & 2 & 7 & 5 & 9 & 5 & 8 & 6 & median is 6 \\
$i=2$ & 3 & 8 & 6 & 0 & 6 & 9 & 7 & median is 6 \\
$i=3$ & 4 & 9 & 7 & 1 & 7 & 0 & 8 & median is 7 \\
$i=4$ & 5 & 0 & 8 & 2 & 8 & 1 & 9 & median is 5 \\
$i=5$ & 6 & 1 & 9 & 3 & 9 & 2 & 0 & median is 3 \\
$i=6$ & 7 & 2 & 0 & 4 & 0 & 3 & 1 & median is 2 \\
$i=7$ & 8 & 3 & 1 & 5 & 1 & 4 & 2 & median is 3 \\
$i=8$ & 9 & 4 & 2 & 6 & 2 & 5 & 3 & median is 4 \\
$i=9$ & 0 & 5 & 3 & 7 & 3 & 6 & 4 & median is 4 \\
$i=10$ & 1 & 6 & 4 & 8 & 4 & 7 & 5 & median is 5
\end{tabular}
