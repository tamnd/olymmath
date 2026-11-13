---
tag: Y4T7MB6EWW
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the following $5 \times 5$ number table
$$
\left(\begin{array}{ccccc}
11 & 17 & 25 & 19 & 16 \\
24 & 10 & 13 & 15 & 3 \\
12 & 5 & 14 & 2 & 18 \\
23 & 4 & 1 & 8 & 22 \\
6 & 20 & 7 & 21 & 9
\end{array}\right)
$$

Try to select 5 elements from this number table such that no two of them are in the same row or column, and make the smallest one as large as possible. Prove the correctness of your selected answer.
