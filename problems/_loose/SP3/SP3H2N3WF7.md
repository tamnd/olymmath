---
tag: SP3H2N3WF7
kind: problem
type: answer
answer: 0 \pmod{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a positive integer $a > 1$. If $a$ is not a perfect square then at the next move we add $3$ to it and if it is a perfect square we take the square root of it. Define the trajectory of a number $a$ as the set obtained by performing this operation on $a$. For example the cardinality of $3$ is $\{3, 6, 9\}$.
Find all $n$ such that the cardinality of $n$ is finite.

The following part problems may attract partial credit.

$\textbf{(a)}$Show that the cardinality of the trajectory of a number cannot be $1$ or $2$.
$\textbf{(b)}$Show that $\{3, 6, 9\}$ is the only trajectory with cardinality $3$.
$\textbf{(c)}$ Show that there for all $k \geq 3$, there exists a number such that the cardinality
of its trajectory is $k$.
$\textbf{(d)}$ Give an example of a number with cardinality of trajectory as infinity.
