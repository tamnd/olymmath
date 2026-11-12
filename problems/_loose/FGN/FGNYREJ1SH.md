---
tag: FGNYREJ1SH
kind: problem
type: answer
answer: 111+22+2+555=690
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, in a row, the digits are written as follows:

$$
\begin{array}{lllllllll}
1 & 1 & 1 & 2 & 2 & 2 & 5 & 5 & 5 .
\end{array}
$$

Between them, several plus signs can be placed so that the resulting sum ends in the digit one:

$$
1+1+12+2+25+5+5=51
$$

How can several plus signs be placed so that the resulting sum ends in zero? An example is sufficient.
