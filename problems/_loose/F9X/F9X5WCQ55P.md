---
tag: F9X5WCQ55P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3146379
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
Let $f(x)$ be a function acting on a string of $0$ s and $1$ s, defined to be the number of substrings of $x$ that have at least one $1$ , where a substring is a contiguous sequence of characters in $x$ . Let $S$ be the set of binary strings with $24$ ones and $100$ total digits. Compute the maximum possible value of $f(s)$ over all $s\in S$ .
For example, $f(110) = 5$ as $\underline{1}10$ , $1\underline{1}0$ , $\underline{11}0$ , $1\underline{10}$ , and $\underline{110}$ are all substrings including a $1$ . Note that $11\underline{0}$ is not such a substring.
