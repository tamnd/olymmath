---
tag: PHCVPH7011
kind: problem
type: answer
answer: "322"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Esther and Frida are supposed to fill a rectangular array of 16 columns and 10 rows, with the numbers 1 to 160 . Esther chose to do it row-wise so that the first row is numbered $1,2, \ldots, 16$ and the second row is $17,18, \ldots, 32$ and so on. Frida chose to do it columnwise, so that her first column has $1,2, \ldots, 10$, and the second column has $11,12, \ldots, 20$ and so on. Comparing Esther's array with Frida's array, we notice that some numbers occupy the same position. Find the sum of the numbers in these positions.
\begin{tabular}{|c|c|c|cc|c|}
\hline 1 & 2 & 3 & $\cdots$ & $\cdots$ & 16 \\
\hline 17 & 18 & 19 & $\cdots$ & $\cdots$ & 32 \\
\hline$\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ \\
$\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ \\
\hline 145 & 146 & 147 & $\cdots$ & $\cdots$ & 160 \\
\hline
\end{tabular}
\begin{tabular}{|c|c|c|cc|c|}
\hline 1 & 11 & 21 & $\cdots$ & $\cdots$ & 151 \\
\hline 2 & 12 & 22 & $\cdots$ & $\cdots$ & 152 \\
\hline$\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ \\
$\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ & $\cdots$ \\
\hline 10 & 20 & 30 & $\cdots$ & $\cdots$ & 160 \\
\hline
\end{tabular}

Esther
Frida
