---
tag: BRXKEVFS4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6 Given 4 processing tasks $J_{1}, J_{2}, J_{3}, J_{4}$, three machines $m_{1}, m_{2}, m_{3}$, processing sequence: $m_{1} \rightarrow m_{2} \rightarrow m_{3}$, processing time matrix
$$
\boldsymbol{J}=\frac{J_{1}}{J_{2}} J_{3}\left[\begin{array}{ccc}
5 & 7 & 9 \\
10 & 5 & 2 \\
J_{4} & 9 & 5 \\
5 & 8 & 10
\end{array}\right]=\left(t_{i j}\right)_{4 \times 3}
$$

Find the optimal processing schedule.
