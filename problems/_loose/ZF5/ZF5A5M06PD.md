---
tag: ZF5A5M06PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k\geq4$ be an integer. Sunny and Ming play a game with strings. A string is a sequence that every element of it is an integer between $1$ and $k$, inclusive. At first, Sunny chooses two positive integers $N,L\geq2$ and write down $N$ strings, each having length $L$. Then Ming mark at most $\frac{N}{2}$ strings. Then Sunny chooses an unmarked string $s$ and calculate the biggest integer $n$ such that there exists another string satisfying its first $n$ element is the same as the first $n$ element of $s$. Then Sunny burn down all strings which first $n$ element if different from the first $n$ element of $s$, leaving only the ones which have the same first $n$ element of $s$. Finally, Ming chooses an integer $d$ between $1$ and $k$, inclusive, and remove all strings which $(n+1)$th element is $d$. Sunny's score would be the number of strings left. Find the maximum score that Sunny can guarantee to get.

*Proposed by USJL*
