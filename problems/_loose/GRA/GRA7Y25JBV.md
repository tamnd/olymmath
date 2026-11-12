---
tag: GRA7Y25JBV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $p = 101$ and let $S$ be the set of $p$ -tuples $(a_1, a_2, \dots, a_p) \in \mathbb{Z}^p$ of integers. Let $N$ denote the number of functions $f: S \to \{0, 1, \dots, p-1\}$ such that

- $f(a + b) + f(a - b) \equiv 2\big(f(a) + f(b)\big) \pmod{p}$ for all $a, b \in S$ , and
- $f(a) = f(b)$ whenever all components of $a-b$ are divisible by $p$ .

Compute the number of positive integer divisors of $N$ . (Here addition and subtraction in $\mathbb{Z}^p$ are done component-wise.)

*Proposed by Ankan Bhattacharya*
