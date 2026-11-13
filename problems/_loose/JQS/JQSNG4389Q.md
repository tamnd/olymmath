---
tag: JQSNG4389Q
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_0$, $a_1$, $a_2$, $\ldots\,$ satisfies the recurrence equation
$$
a_n = 2 a_{n-1} - 2 a_{n - 2} + a_{n - 3}
$$
for every integer $n \ge 3$. If $a_{20} = 1$, $a_{25} = 10$, and $a_{30} = 100$, what is the value of $a_{1331}$?
