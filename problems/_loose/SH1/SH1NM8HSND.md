---
tag: SH1NM8HSND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Select a number $X$ from the set of all $3$-digit natural numbers uniformly at random. Let $A \in [0,1]$ be the probability that $X$ is divisible by $11$, given that it is palindromic. Let $B \in [0,1]$ be the probability that X is palindromic, given that it is divisible by $11$. Compute $B-A$.
Recall that a $3$-digit number is a palindrome if it reads the same left to right as right to left. For instance, $484$ is a palindrome, but $603$ is not a palindrome.
