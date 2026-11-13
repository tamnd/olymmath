---
tag: 5XVT7Q80WT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a collection of $1720$ balls, half of which are black and half of which are white, aligned in a straight line. Our task is to make the balls alternating in color along the line. The following greedy algorithm accomplishes that task for $2n$ balls:

\begin{tabular}{l}
1: \textbf{FOR} $i$ \textbf{IN} $[2,3,\dots,2n]$ \\
2: $ $ \textbf{IF} balls $i-1$ and $i$ have the same color: \\
3: $ $ $j\gets$ smallest index greater than $i$ for which balls $i-1$ and $j$ have different colors \\
4: $ $ swap balls $i$ and $j$
\end{tabular}

Given a configuration $C$ of our $1720$ balls, let $\hat{\sigma}(C)$ denote the number of swaps the greedy algorithm takes, and let $\sigma(C)$ denote the minimum number of swaps actually necessary to perform the task. Find the maximum value over all configurations $C$ of $\hat{\sigma}(C)-\sigma(C)$.
