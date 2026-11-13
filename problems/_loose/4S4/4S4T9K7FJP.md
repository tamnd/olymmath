---
tag: 4S4T9K7FJP
kind: problem
type: answer
answer: 200,150,300
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Task 1 - 221011}

In a department of a VEB, three products $E_{1}, E_{2}, E_{3}$ are produced. The table below shows the daily raw material, energy, and labor costs in Marks per unit for the three products. Additionally, the total amount of funds available daily for raw materials, energy, and wages is provided.

Prove that it is possible to set the daily production quantities of the products $E_{1}, E_{2}, E_{3}$ such that all the funds mentioned are fully utilized!

Prove that this requirement for full utilization uniquely determines the quantities, and determine these quantities!

\begin{tabular}{lllll}
\hline Cost Type & \multicolumn{4}{l}{ Costs in M per unit for } \\
$E_{1}$ & $E_{2}$ & $E_{3}$ & \begin{tabular}{l}
Total funds available \\
daily in Marks
\end{tabular} \\
\hline Raw material costs & 6 & 7 & 9 & 4950 \\
Energy costs & 1 & 2 & 2 & 1100 \\
Labor costs & 5 & 6 & 8 & 4300 \\
\hline
\end{tabular}
