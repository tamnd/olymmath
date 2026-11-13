---
tag: N36J6KVY6M
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be an $n$-digit positive integer, $n \geqslant 2$, and $B$ be a $k$-digit positive integer, $k \geqslant 1$. Then there are $n-1$ ways to insert $B$ entirely between two adjacent digits of $A$, resulting in an $n+k$-digit positive integer $C$. For example, if $A=1991$ and $B=35$, there are three insertion methods: $C$ can be 135991, 193591, or 199351.
If for every $A$ that is divisible by $B$, inserting $B$ into $A$ in any way results in a $C$ that is also divisible by $B$, then $B$ is called a harmonious number. Among the 15 numbers $1,2,3,4,5,6,7,8,9,10,11,12,15,66,90$, the number of harmonious numbers is
(A) 6.
(B) 8.
(C) 10.
(D) 11.
(3rd "Five Sheep Cup" Junior High School Mathematics Competition, 1991)
