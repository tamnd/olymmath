---
tag: PEHA5NWHFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number. Around a circular table, $p$ students sit. We give $p$ pieces of candy to those students in the following manner. The first candy we give to an arbitrary student. Then, going around clockwise, we skip two students and give the next student a piece of candy, then we skip 4 students and give another piece of candy to the next student... In general in the $k-$th turn we skip $2k$ students and give the next student a piece of candy. We do this until we don't give out all $p$ pieces of candy.
$a)$ How many students won't get any pieces of candy?
$b)$ How many pairs of neighboring students (those students who sit next to each other on the table) both got at least a piece of candy?
