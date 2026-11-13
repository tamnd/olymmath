---
tag: 7XRXQFNQF9
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
P.J. starts with $m=500$ and chooses a positive integer $n$ with $1 \leq n \leq 499$. He applies the following algorithm to $m$ and $n$ :

- P.J. sets $r$ equal to the remainder when $m$ is divided by $n$.
- If $r=0$, P.J. sets $s=0$.

If $r>0$, P.J. sets $s$ equal to the remainder when $n$ is divided by $r$.

- If $s=0$, P.J. sets $t=0$.

If $s>0$, P.J. sets $t$ equal to the remainder when $r$ is divided by $s$.

For example, when $n=8$, P.J. obtains $r=4, s=0$, and $t=0$. For how many of the positive integers $n$ with $1 \leq n \leq 499$ does P.J.'s algorithm give $1 \leq r \leq 15$ and $2 \leq s \leq 9$ and $t=0$ ?
(A) 14
(B) 12
(C) 16
(D) 15
(E) 13
