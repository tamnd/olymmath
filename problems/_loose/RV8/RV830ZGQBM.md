---
tag: RV830ZGQBM
kind: problem
type: answer
answer: 正确,错误,正确,错误,错误,正确,正确
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A, B, and C answered the same seven true/false questions. According to the rules, if they believed the statement was correct, they marked a " $\sqrt{ }$ "; if they believed the statement was incorrect, they marked a " $\times$ ". The results of A, B, and C's answers are shown in the table below. It is known that A, B, and C each got 5 questions right and 2 questions wrong.
\begin{tabular}{|c|c|c|c|c|c|c|c|}
\hline & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\hline A & $\times$ & $\times$ & $\checkmark$ & $\times$ & $\times$ & $\times$ & $\checkmark$ \\
\hline B & $\checkmark$ & $\times$ & $\times$ & $\times$ & $\times$ & $\checkmark$ & $\times$ \\
\hline C & $\checkmark$ & $\checkmark$ & $\checkmark$ & $\checkmark$ & $\times$ & $\checkmark$ & $\checkmark$ \\
\hline
\end{tabular}

Question: What are the correct answers to these seven true/false questions?
