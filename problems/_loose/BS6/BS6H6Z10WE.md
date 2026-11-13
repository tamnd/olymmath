---
tag: BS6H6Z10WE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, every $2 \times 2$ grid contains four non-zero positive digits, one in each cell. The sum of the four two-digit positive integers created by the two rows and two columns of a grid \begin{tabular}{|l|l|} \hline$a$ & $b$ \\ \hline$c$ & $d$ \\ \hline \end{tabular} is denoted $\left\langle\begin{array}{|l|l|}\hline a & b \\ \hline c & d \\ \hline\end{array}\right\rangle$.
For example, $\left\langle\begin{array}{|l|l|}\hline 3 & 4 \\ \hline 9 & 8 \\ \hline\end{array}\right\rangle=34+98+39+48=219$.
(a) Determine the value of $\left\langle\begin{array}{|l|l|}\hline 7 & 3 \\ \hline 2 & 7 \\ \hline\end{array}\right\rangle$.
(b) Determine all pairs $(x, y)$ of digits for which $\left\langle\begin{array}{|c|c}\hline 5 & b \\ \hline c & 7\end{array}\right)$ equals $\left\langle\begin{array}{|c|c|}\hline x & b+1 \\ \hline c-3 & y \\ \hline\end{array}\right\rangle$.
(c) Determine all possible values of $\left\langle\begin{array}{|l|l|}\hline a & b \\ \hline c & d \\ \hline\end{array}\right\rangle$ minus $\left\langle\begin{array}{|l|l|}\hline a+1 & b-2 \\ \hline c-1 & d+1 \\ \hline\end{array}\right\rangle$.
(d) Determine all grids for which $\left\langle\begin{array}{|l|l|}\hline a & b \\ \hline c & d \\ \hline\end{array}\right\rangle$ equals 104, and explain why there are no more such grids.
