---
tag: 36GTAQF97S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote by $\lfloor x\rfloor$ the greatest positive integer less than or equal to $x$. Let $m\ge2$ be an integer, and let $s$ be a real number between $0$ and $1$. Define an infinite sequence of real numbers $a_1, a_2, a_3,\ldots$ by setting $a_1 = s$ and $ak = ma_{k-1}-(m-1)\lfloor a_{k-1}\rfloor$ for all $k\ge2$. For example, if $m = 3$ and $s = \tfrac58$, then we get $a_1 = \tfrac58$, $a_2 = \tfrac{15}8$, $a_3 = \tfrac{29}8$, $a_4 = \tfrac{39}8$, and so on.

Call the sequence $a_1, a_2, a_3,\ldots$ $\textbf{orderly}$ if we can find rational numbers $b, c$ such that $\lfloor a_n\rfloor = \lfloor bn + c\rfloor$ for all $n\ge1$. With the example above where $m = 3$ and $s = \tfrac58$, we get an orderly sequence since $\lfloor a_n\rfloor = \left\lfloor\tfrac{3n}2-\tfrac32\right\rfloor$ for all $n$.

Show that if $s$ is an irrational number and $m\ge2$ is any integer, then the sequence $a_1, a_2, a_3,\ldots$ is $\textbf{not}$ an orderly sequence.
