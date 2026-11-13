---
tag: 9N4C36NSDV
kind: problem
type: answer
answer: B = \{4, 2, 6, 3, 5\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $X$ = $\{ 1,2 \ldots 10 \}$ . Find two disjoint nonempty sunsets $A$ and $B$ of $X$ such that

a) $A \cup B = X$;

b) $\prod_{x\in A}x$ is divisible by $\prod_{x\in B}x$, where $\prod_{x\in C}x$ is the product of all numbers in $C$;

c) $\frac{ \prod\limits_{x\in A}x}{ \prod\limits_{x\in B}x}$ is as small as possible.
