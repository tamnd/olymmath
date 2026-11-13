---
tag: YS8ENHH0YG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378344
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19304
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Given a string of at least one character in which each character is either A or B, Kathryn is allowed to make these moves:

- she can choose an appearance of A, erase it, and replace it with BB, or
- she can choose an appearance of B, erase it, and replace it with AA.

Kathryn starts with the string A. Let $a_n$ be the number of strings of length $n$ that Kathryn can reach using a sequence of zero or more moves. (For example, $a_1=1$ , as the only string of length 1 that Kathryn can reach is A.) Then $\sum_{n=1}^{\infty} \frac{a_n}{5^n} = \frac{m}{n}$ , where $m$ and $n$ are positive integers with $\gcd(m,n)=1$ . Compute $100m+n$ .

*Proposed by Luke Robitaille*
