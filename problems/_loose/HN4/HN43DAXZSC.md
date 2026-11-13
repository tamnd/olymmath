---
tag: HN43DAXZSC
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1 We write $\{a, b, c\}$ for the set of three different positive integers $a, b$, and $c$. By choosing some or all of the numbers $a, b$ and $c$, we can form seven nonempty subsets of $\{a, b, c\}$. We can then calculate the sum of the elements of each subset. For example, for the set $\{4,7,42\}$ we will find sums of $4,7,42,11,46,49$, and 53 for its seven subsets. Since 7,11 , and 53 are prime, the set $\{4,7,42\}$ has exactly three subsets whose sums are prime. (Recall that prime numbers are numbers with exactly two different factors, 1 and themselves. In particular, the number 1 is not prime.)
What is the largest possible number of subsets with prime sums that a set of three different positive integers can have? Give an example of a set $\{a, b, c\}$ that has that number of subsets with prime sums, and explain why no other three-element set could have more.
