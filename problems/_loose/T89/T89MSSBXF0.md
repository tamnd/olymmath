---
tag: T89MSSBXF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people together write a $2k$-digit number using the digits $1,2,3,4,5$. The first person writes the first digit, the second person writes the second digit, the third digit is written by the first person again, and so on. Under the interference of the first person, can the second person ensure that the resulting number is divisible by 9? Discuss the following two cases:
$$
\begin{array}{l}
\text { (1) } k=10 \text {. } \\
\text { (2) } k=15 \text {. }
\end{array}
$$
(Kyiv Mathematical Olympiad, 1975)
