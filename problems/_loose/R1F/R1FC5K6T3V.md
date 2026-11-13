---
tag: R1FC5K6T3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a permutation on $\{0,1,\ldots ,2015\}$ and $b,c$ are also permutations on $\{1,2,\ldots ,2015\}$. For all $x\in \{1,2,\ldots ,2015\}$, the following conditions are satisfied:

(i) $a(x)-a(x-1)\neq 1$,\\
(ii) if $b(x)\neq x$, then $c(x)=x$,\\

Prove that the number of $a$'s is equal to the number of ordered pairs of $(b,c)$.
