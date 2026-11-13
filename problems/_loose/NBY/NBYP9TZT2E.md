---
tag: NBYP9TZT2E
kind: problem
type: answer
answer: m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $m$ and $n$ are positive integers, an $(m, n)$-sequence is defined to be an infinite sequence $x_{1}, x_{2}, x_{3}, \ldots$ of $A$ 's and $B$ 's such that if $x_{i}=A$ for some positive integer $i$, then $x_{i+m}=B$ and if $x_{i}=B$ for some positive integer $i$, then $x_{i+n}=A$. For example, $A B A B A B \ldots$ is a $(1,1)$-sequence.

(a) Determine all $(2,2)$-sequences.

(b) Show that there are no $(1,2)$-sequences.

(c) For every positive integer $r$, show that if there exists an $(m, n)$-sequence, then there exists an $(r m, r n)$-sequence.

(d) Determine all pairs $(m, n)$ for which there is an $(m, n)$-sequence.
