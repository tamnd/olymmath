---
tag: 9GGRE7GK46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1430188
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2017
    source: hf-ai-mo-aops
    label: 2017 Canadian Mathematical Olympiad Qualification
---
Let $N$ be a positive integer. There are $N$ tasks, numbered $1, 2, 3, \ldots, N$ , to be completed. Each task takes one minute to complete and the tasks must be completed subjected to the following conditions:

- Any number of tasks can be performed at the same time.
- For any positive integer $k$ , task $k$ begins immediately after all tasks whose numbers are divisors of $k$ , not including $k$ itself, are completed.
- Task 1 is the first task to begin, and it begins by itself.

Suppose $N = 2017$ . How many minutes does it take for all of the tasks to complete? Which tasks are the last ones to complete?
