---
tag: ZDCZJTYHXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a competition a school wants to nominate a team of $k$ students, where $k$ is a given positive integer. Each member of the team has to compete in the three disciplines juggling, singing and mental arithmetic. To qualify for the team, the $n \ge 2$ students of the school compete in qualifying competitions, determining a unique ranking in each of the three disciplines. The school now wants to nominate a team satisfying the following condition:

$(*)$ *If a student $X$ is not nominated for the team, there is a student $Y$ on the team who defeated $X$ in at least two disciplines.*

Determine all positive integers $n \ge 2$ such that for any combination of rankings, a team can be chosen to satisfy the condition $(*)$, when

a) $k=2$,
b) $k=3$.
