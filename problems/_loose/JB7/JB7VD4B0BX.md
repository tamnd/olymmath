---
tag: JB7VD4B0BX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $A= \overline{a_n a_{n-1} \ldots a_1 a_0}$ such that not all of its digits are equal and no digit is $0$, and $A$ divides all numbers of the following form: $A_1 = \overline{a_0 a_n a_{n-1} \ldots a_2 a_1}, A_2 = \overline{a_1 a_0 a_{n} \ldots a_3 a_2}, \ldots ,$ $
A_{n-1} = \overline{a_{n-2} a_{n-3} \ldots a_0 a_n a_{n-1}}, A_n = \overline{a_{n-1} a_{n-2} \ldots a_1 a_0 a_n}$.
