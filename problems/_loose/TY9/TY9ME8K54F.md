---
tag: TY9ME8K54F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that we have a $2\times5$ grid, and we wish to write $0$'s and $1$'s inside such that for any $2\times2$ sub-block, the $\textit{determinant}$ is $0$. The determinant of a $2\times2$ block $ \begin{bmatrix}a&b\\c&d\end{bmatrix}$ is $ad-bc$. For example, the following is a valid configuration:
<see attached>
However, the following is not valid because the last $2\times2$ sub-block has determinant $1$:
<see attached>
How many such valid $2\times5$ configurations are there?
