---
tag: Z7KE454PKK
kind: problem
type: answer
answer: -\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of numbers $t_{1}, t_{2}, t_{3}, \ldots$ is defined by

$$
\left\{\begin{array}{l}
t_{1}=2 \\
t_{n+1}=\frac{t_{n}-1}{t_{n}+1}
\end{array}\right.
$$

Suggestion: Calculate the first five terms of the sequence.

for each positive integer $n$. Find $\mathrm{t}_{2011}$.
