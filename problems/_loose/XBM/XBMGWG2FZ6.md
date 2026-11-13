---
tag: XBMGWG2FZ6
kind: problem
type: answer
answer: Person2019sitsatthelefttable
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three tables in a room. The left table has $L \mathrm{~kg}$ of chocolate on it, the middle table has $M \mathrm{~kg}$ of chocolate on it, and the right table has $R \mathrm{~kg}$ of chocolate on it, for some positive integers $L, M$ and $R$. People enter the room one at a time. Each person determines the table at which they will sit by determining the table at which they would currently receive the greatest mass of chocolate, assuming that the people at each table would share the chocolate at that table equally. If at least two tables would result in the same share of the chocolate, the person will sit at whichever of these tables is farther to the left.
For example, suppose that $L=5, M=3$ and $R=6$. Person 1 sits at the right table, because their share would be $6 \mathrm{~kg}$ instead of $5 \mathrm{~kg}$ or 3 $\mathrm{kg}$ at the other two tables. Person 2 then sits at the left table, because their share would be $5 \mathrm{~kg}$ instead of $3 \mathrm{~kg}$ at each of the other two tables. The chart to the right shows the possible shares
\begin{tabular}{||c|c||c|c||c|c||}
\multicolumn{2}{||c||}{ Left } & \multicolumn{2}{l|}{ Middle } & \multicolumn{2}{c|}{ Right } \\
\hline 5 & & 3 & & 6 & $\mathrm{P} 1$ \\
5 & $\mathrm{P} 2$ & 3 & & & \\
$\frac{5}{2}$ & & 3 & $\mathrm{P} 3$ & 3 & \\
$\frac{5}{2}$ & & $\frac{3}{2}$ & & 3 & $\mathrm{P} 4$
\end{tabular}
in $\mathrm{kg}$ and the final decision for each of the first four people.
(a) Suppose that $L=5, M=3$ and $R=6$ and that 7 people enter the room in total. Continue the chart above to show where the 7 people sit and explain why each of Person 5, Person 6 and Person 7 make their choice.
(b) Explain why there cannot be positive integers $L, M$ and $R$ for which the first 6 people who enter the room sit at the tables in the following order: Left, Middle, Right, Left, Left, Left.
(c) Suppose that $L=9, M=19$ and $R=25$. Determine, with justification, where Person 2019 will sit.
