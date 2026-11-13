---
tag: DWPZNBBST4
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from the number $123456789$, at each step, we are swaping two adjacent numbers which are different from zero, and then decreasing the two numbers by $1$. What is the sum of digits of the least number that can be get after finite steps?

$
\textbf{(A)}\ 0
\textbf{(B)}\ 1
\textbf{(C)}\ 3
\textbf{(D)}\ 5
\textbf{(E)}\ 9
$
