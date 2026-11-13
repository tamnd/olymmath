---
tag: 6Z2N7JX6ZW
kind: problem
type: answer
answer: 7.9,2.8,2.1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of positive real numbers that satisfy the system of equations

$$
\begin{aligned}
3\lfloor x\rfloor - \{y\} + \{z\} & = 20.3 \\
3\lfloor y\rfloor + 5\lfloor z\rfloor - \{x\} & = 15.1 \\
\{y\} + \{z\} & = 0.9
\end{aligned}
$$

For a real number $t$, $\lfloor t\rfloor$ denotes the greatest integer less than or equal to $t$, and $\{t\}$ denotes its fractional part, $\{t\} = t - \lfloor t\rfloor$. For example, if $t = 15.1$, then $\lfloor t\rfloor = 15$ and $\{t\} = 0.1$.
