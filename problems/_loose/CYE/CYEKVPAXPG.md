---
tag: CYEKVPAXPG
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the blackboard, all natural numbers from 1 to 1988 are written. Operations $A$ and $B$ are alternately performed on these numbers, i.e., first $A$, then $B$, then $A$ again, then $B$, and so on. Operation $A$ involves subtracting the same natural number from each number on the blackboard (the number subtracted can be different in different $A$ operations); Operation $B$ involves erasing two numbers from the blackboard and writing down their sum. The process continues until after a certain $B$ operation, only one number remains on the blackboard. Given that this number is non-negative, find this number.
