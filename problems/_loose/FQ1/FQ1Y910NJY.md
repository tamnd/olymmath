---
tag: FQ1Y910NJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the memory of a supercomputer, there is an infinite string of numbers in both directions. Initially, one number in the string is one, and all others are zeros. In one step, the supercomputer adds to each number in the string the sum of its two neighboring numbers (all additions occur simultaneously). This results in the following sequence of strings:

$$
\begin{array}{llllllllllll}
\text { Step 0: } & \ldots & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & \ldots \\
\text { Step 1: } & \ldots & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & \ldots \\
\text { Step 2: } & \ldots & 0 & 0 & 1 & 2 & 3 & 2 & 1 & 0 & 0 & \ldots \\
\text { Step 3: } & \ldots & 0 & 1 & 3 & 6 & 7 & 6 & 3 & 1 & 0 & \ldots \\
\ldots
\end{array}
$$

Is it true that starting from the second step, each string will contain at least one non-zero even number? Justify your answer.
