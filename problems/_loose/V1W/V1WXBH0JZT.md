---
tag: V1WXBH0JZT
kind: problem
type: answer
answer: "324"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Magic Academy has an operation rule: \begin{tabular}{|l|l|} \hline$a$ & $b$ \\ \hline$c$ & $d$ \\ \hline \end{tabular}$=(\overline{a b}+\overline{c d})-(\overline{a c}+\overline{b d})$, where $a, b, c, d$ are all digits from 1 to 9, for example: when the array $(a, b, c, d)$ is $(2,2,3,4)$,
\begin{tabular}{|l|l|}
\hline 2 & 2 \\
\hline 3 & 4 \\
\hline
\end{tabular}$=(22+34)-(23+24)=9$

According to this rule, the number of possible arrays $(a, b, c, d)$ that can make the operation result 45 is $ $.
