---
tag: 2XFADATZY2
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In daily life, decimal is often used to represent numbers, using 10 digits: $0,1,2,3,4,5,6,7,8,9$. In electronic computers, binary is used, which only requires two digits: 0 and 1. Just as in decimal addition, we "carry over when reaching ten," in binary, we must "carry over when reaching 2." Thus, we can obtain the following table comparing the decimal and binary representations of natural numbers:
\begin{tabular}{|c|l|l|l|l|l|l|l|l|l|l|}
\hline Decimal & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & $\cdots$ \\
\hline Binary & 0 & 1 & 10 & 11 & 100 & 101 & 110 & 111 & 1000 & $\cdots$ \\
\hline
\end{tabular}

The decimal 0 is still 0 in binary, the decimal 1 is still 1 in binary, the decimal 2 becomes $1+1=10$ in binary, the decimal 3 becomes $10+1=11$ in binary, and so on. What is the decimal representation of "1111" in binary?
