---
tag: 3BRACB6BGS
kind: problem
type: answer
answer: n = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0, a_1, \ldots, a_9$ and $b_1 , b_2, \ldots,b_9$ be positive integers such that $a_9<b_9$ and $a_k \neq b_k, 1 \leq k \leq 8.$ In a cash dispenser/automated teller machine/ATM there are $n\geq a_9$ levs (Bulgarian national currency) and for each $1 \leq i \leq 9$ we can take $a_i$ levs from the ATM (if in the bank there are at least $a_i$ levs). Immediately after that action the bank puts $b_i$ levs in the ATM or we take $a_0$ levs. If we take $a_0$ levs from the ATM the bank doesn't put any money in the ATM. Find all possible positive integer values of $n$ such that after finite number of takings money from the ATM there will be no money in it.
