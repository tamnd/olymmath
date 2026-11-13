---
tag: N4ZW6JRTXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence is defined recursively as follows:

$$
\begin{gathered}
F_{0}=F_{1}=1 \\
F_{n+1}=F_{n}+F_{n-1}
\end{gathered}
$$

Show that every integer $ n \geq 1 $ can be written as the sum of Fibonacci numbers $ F_{n} $ with non-consecutive indices. For example:

$$
31=21+8+2=F_{7}+F_{5}+F_{2}
$$
