---
tag: 4F4AYQEE97
kind: problem
type: answer
answer: S \setminus \{0\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Find all subsets $S\subseteq\mathbb Z/p\mathbb Z$ such that
1. if $a,b\in S$, then $ab\in S$, and
2. there exists an $r\in S$ such that for all $a\in S$, we have $r-a\in S\cup\{0\}$.

*Proposed by Harun Khan*
