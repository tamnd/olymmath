---
tag: HKW9ZW4W8S
kind: problem
type: answer
answer: \frac{k(k^{2}+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1,2, \ldots, k^{2}$ are arranged in a square table

$$
\begin{array}{cccc}
1, & 2, & \ldots, & k \\
k+1, & k+2, & \ldots, & 2 k \\
\ldots & \ldots, & \ldots & \ldots \\
(k-1) k+1, & \ldots, & \ldots, & k^{2}
\end{array}
$$

An arbitrary number is written down, after which the row and column containing this number are crossed out from the table. The same is done with the remaining table of $(k-1)^{2}$ numbers, and so on, $k$ times. Find the sum of the written numbers.
