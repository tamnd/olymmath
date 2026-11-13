---
tag: 6QBJSPJFGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a list $A$ of $n$ real numbers, the following algorithm, known as $\textit{insertion sort}$, sorts the elements of $A$ from least to greatest.

\begin{tabular}{l}
1: \textbf{FUNCTION} $IS(A)$ \\
2: $ $ \textbf{FOR} $i=0,\ldots, n-1$: \\
3: $ $ $j \leftarrow i$\\
4: $ $ \textbf{WHILE} $j>0$ \& $A[j-1]>A[j]:$\\
5: $ $ \textbf{SWAP} $A[j], A[j-1]$\\
6: $ $ $j \leftarrow j-1$\\
7: \textbf{RETURN} $A$
\end{tabular}

As $A$ ranges over all permutations of $\{1, 2, \ldots, n\}$, let $f(n)$ denote the expected number of comparisons (i.e., checking which of two elements is greater) that need to be made when sorting $A$ with insertion sort. Evaluate $f(13) - f(12)$.
