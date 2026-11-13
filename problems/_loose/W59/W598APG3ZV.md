---
tag: W598APG3ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given three columns of numbers: $A$, $B$, and $C$. Column $A$ consists of decimal numbers of the form $10^{k}$, where $k$ is an integer and $k \geqslant 1$. Columns $B$ and $C$ are the numbers from column $A$ converted to binary and quinary (base-5) numbers, respectively:
\begin{tabular}{lll}
$A$ & $B$ & $C$ \\
10 & 1010 & 20 \\
100 & 1100100 & 40 \\
1000 & 1111101000 & 13000 \\
$\ldots$ & $\ldots$ & $\ldots$
\end{tabular}

Prove that for any integer $n>1$, there is exactly one $n$-digit number in column $B$ or column $C$.
(USA Putnam Mathematical Competition)
