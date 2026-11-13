---
tag: GJ7HQ3QC8H
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f$ is defined on the natural numbers $1,2,3, \ldots$ by $f(1)=1$ and
$$
f(n)=\left\{\begin{array}{ll}
f\left(\frac{n}{10}\right) & \text { if } 10 \mid n \\
f(n-1)+1 & \text { otherwise }
\end{array}\right.
$$

Note: The notation $b \mid a$ means integer number $a$ is divisible by integer number $b$.
(a) Calculate $f(2019)$.
(b) Determine the maximum value of $f(n)$ for $n \leq 2019$.
(c) A new function $g$ is defined by $g(1)=1$ and
$$
g(n)=\left\{\begin{array}{ll}
g\left(\frac{n}{3}\right) & \text { if } 3 \mid n \\
g(n-1)+1 & \text { otherwise }
\end{array}\right.
$$

Determine the maximum value of $g(n)$ for $n \leq 100$.
