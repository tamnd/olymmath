---
tag: 68EFZS89RZ
kind: problem
type: answer
answer: a_{k}+a_{k+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, a_{3}, \ldots, a_{k}, \ldots$ be a sequence of numbers. The first, second, third, $\ldots k$-th, ... partial sums of this sequence are typically understood as follows:

$$
\begin{aligned}
& s_{1}=a_{1}, s_{2}=a_{1}+a_{2}=s_{1}+a_{2} \\
& s_{3}=a_{1}+a_{2}+a_{3}=s_{2}+a_{3}, \ldots \\
& s_{k}=a_{1}+a_{2}+a_{3}+\ldots+a_{k}=s_{k-1}+a_{k}, \ldots
\end{aligned}
$$

Show that if the sequence $a_{1}, a_{2}, \ldots a_{k} \ldots$ is an arithmetic sequence, then the quotient

$\frac{s_{k+r}-s_{k-r}}{r}(r<k)$ is independent of $r$.
