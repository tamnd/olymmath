---
tag: GV4MMQK4QE
kind: problem
type: answer
answer: "4100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $p$ and $q$ are positive integers, $\max (p, q)$ is the maximum of $p$ and $q$ and $\min (p, q)$ is the minimum of $p$ and $q$. For example, $\max (30,40)=40$ and $\min (30,40)=30$. Also, $\max (30,30)=30$ and $\min (30,30)=30$.

Determine the number of ordered pairs $(x, y)$ that satisfy the equation

$$
\max (60, \min (x, y))=\min (\max (60, x), y)
$$

where $x$ and $y$ are positive integers with $x \leq 100$ and $y \leq 100$.
