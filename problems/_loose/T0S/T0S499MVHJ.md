---
tag: T0S499MVHJ
kind: problem
type: answer
answer: "143"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a four-digit positive integer $A B C D$, where $A, B, C$, and $D$ are digits with $A \neq 0$ and $D \neq 0$, we define the Reverse Digit sum (RD sum) of $A B C D$ to be the sum of $A B C D$ and $D C B A$. For example, the RD sum of 1205 is $1205+5021=6226$, while the integer 2300 does not have an RD sum.
Note that the four-digit positive integer $A B C D$ is equal to $1000 A+100 B+10 C+D$.
(a) Determine the RD sum of 4281 .
(b) There are positive integers $m$ and $n$ with the property that the RD sum of the integer $A B C D$ is always equal to $m \times(A+D)+n \times(B+C)$. State the value of $m$ and the value of $n$.
(c) Determine the number of four-digit integers whose RD sum is 3883 .
(d) Determine the number of four-digit integers that are equal to the RD sum of a four-digit integer.
