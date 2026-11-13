---
tag: T21XKMK3J0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider that for each of the natural numbers from 100 to 999, we have calculated the sum $S$ of their digits, and that we have counted how many times each possible value of $S=1,2,3, \ldots, 27$ occurs. Show that the number of occurrences $f(S)$ of the value $S$ is given by the following expressions:

$$
f(S)= \begin{cases}\frac{n(n+1)}{2}, & \text { if } 1 \leqq S \leqq 9 \\ -n^{2}+28 n-126, & \text { if } 10 \leqq S \leqq 18 \\ \frac{n^{2}-57 n+812}{2}, & \text { if } 19 \leqq S \leqq 27\end{cases}
$$
