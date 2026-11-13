---
tag: 3CNB7JANN4
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set composed of positive integers. If for any three distinct $x, y, z \in S$, at least one of $x, y, z$ is a divisor of $x+y+z$, then $S$ is called "beautiful". Prove that there exists a positive integer $N$ such that the following relationship holds: for any beautiful set $S$, there exists a positive integer $n_{S} \geq 2$, such that the number of elements in $S$ that are not divisible by $n_{S}$ is at most $N$. Determine the minimum value of $N$.
