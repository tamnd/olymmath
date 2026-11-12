---
tag: MA9CJW4AX1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097568
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1999 Tournament Of Towns
---
For every non-negative integer $i$ , define the number $M(i)$ as follows:
write $i$ down as a binary number, so that we have a string of zeroes and ones, if the number of ones in this string is even, then set $M(i) = 0$ , otherwise set $M(i) = 1$ . (The first terms of the sequence $M(i)$ , $i = 0, 1, 2, ...$ are $0, 1, 1, 0, 1, 0, 0, 1,...$ )
(a) Consider the finite sequence $M(O), M(1), . . . , M(1000) $ .
Prove that there are at least $320$ terms in this sequence which are equal to their neighbour on the right : $M(i) = M(i + 1 )$ .
(b) Consider the finite sequence $M(O), M(1), . . . , M(1000000)$ .
Prove that the number of terms $M(i)$ such that $M(i) = M(i +7)$ is at least $450000$ .

(A Kanel)
