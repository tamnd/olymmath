---
tag: KNHE5BW1CC
kind: problem
type: answer
answer: "62"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
100 people participate in a quick calculation test, with a total of 10 questions. The number of people who answered each question correctly is shown in the table below:
\begin{tabular}{|c|c|c|c|c|c|c|c|c|c|c|}
\hline Question Number & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
\hline \begin{tabular}{l}
Correct \\
Answers
\end{tabular} & 93 & 90 & 86 & 91 & 80 & 83 & 72 & 75 & 78 & 59 \\
\hline
\end{tabular}

Rule: Answering 6 or more questions correctly is considered passing. Based on the table above, calculate the minimum number of people who passed.
