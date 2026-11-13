---
tag: WF6CNE6C63
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $i_{1}, i_{2}, \ldots i_{n}$ be any permutation of the elements $1,2, \ldots n$ and consider the system of inequalities

$$
\begin{aligned}
& x_{1}>x_{2}>\ldots>x_{n-1}>x_{n} \ldots \\
& \left|x_{i_{1}}\right|>\left|x_{i_{2}}\right|>\ldots>\left|x_{i_{n-1}}\right|>\left|x_{i_{n}}\right| \ldots
\end{aligned}
$$

Determine how many permutations $i_{1}, i_{2}, \ldots, i_{n}$ exist for which this system is solvable.
