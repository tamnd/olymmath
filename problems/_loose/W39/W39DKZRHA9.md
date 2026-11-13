---
tag: W39DKZRHA9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider the following triangular array

$$ \begin{array}{cccccccc}
0 & 1 & 1 & 2 & 3 & 5 & 8 & \ldots \\
\ & 0 & 1 & 1 & 2 & 3 & 5 & \ldots \\
\ & \ & 2 & 3 & 5 & 8 & 13 & \ldots \\
\ & \ & \ & 4 & 7 & 11 & 18 & \ldots \\
\ & \ & \ & \ & 12 & 19 & 31 & \ldots \\
\end{array} $$

which is defined by the conditions

i) on the first two lines, each element, starting with the third one, is the sum of the preceding two elements;

ii) on the other lines each element is the sum of the two numbers found on the same column above it.

a) Prove that all the lines satisfy the first condition i);

b) Let $a,b,c,d$ be the first elements of 4 consecutive lines in the array. Find $d$ as a function of $a,b,c$.
