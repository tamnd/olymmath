---
tag: J7J17J6TMZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A stack of stones is on a table, and Pedrinho plays the following game: at any moment, he can choose a stack with at least 3 stones, remove one of these stones, and split the stack into two non-empty stacks. For example, if he has a stack of 15 stones, he can split this stack into two stacks of 9 and 5 (he removes one stone, leaving 14 stones in the stack and then splits it). He can continue with the process. For example, Pedrinho can split the stack with 9 stones into two, one of 3 and one of 5, ending up with three stacks, one of 3, and two of 5.

a) If at the beginning there is a single stack with 19 stones on the table, can Pedrinho, after some moves, end up with all remaining stacks having exactly 3 stones?

b) And if there is a single stack with 1001 stones?
