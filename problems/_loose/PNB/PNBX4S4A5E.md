---
tag: PNBX4S4A5E
kind: problem
type: answer
answer: 2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $B_{n}$ be the set of all binary strings of length $n$. For a binary string $s_{1} s_{2} \ldots s_{n}$, we define its twist in the following way. First, we count how many blocks of consecutive digits it has. Denote this number by $b$. Then, we replace $s_{b}$ with $1-s_{b}$. A string $a$ is said to be a descendant of $b$ if $a$ can be obtained from $b$ through a finite number of twists. A subset of $B_{n}$ is called divided if no two of its members have a common descendant. Find the largest possible cardinality of a divided subset of $B_{n}$.

(Viktor Simjanoski)
