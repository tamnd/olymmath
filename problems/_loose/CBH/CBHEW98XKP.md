---
tag: CBHEW98XKP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $N$, Matt writes $N$ in decimal on a blackboard, without writing any of the leading 0s. Every minute he takes two consecutive digits, erases them, and replaces them with the last digit of their product. Any leading zeroes created this way are also erased. He repeats this process for as long as he likes. We call the positive integer $M$ obtainable from $N$ if starting from $N$, there is a finite sequence of moves that Matt can make to produce the number $M$. For example, 10 is obtainable from 251023 via
$$
2510 \underline{23} \rightarrow \underline{25106} \rightarrow \underline{106} \rightarrow 10
$$
(a) Show that 2018 is obtainable from 2567777899 .
(b) Find two positive integers $A$ and $B$ for which there is no positive integer $C$ such that both $A$ and $B$ are obtainable from $C$.
(c) Let $S$ be any finite set of positive integers, none of which contains the digit 5 in its decimal representation. Prove that there exists a positive integer $N$ for which all elements of $S$ are obtainable from $N$.
