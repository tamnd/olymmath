---
tag: N2MS21SZS7
kind: problem
type: answer
answer: n \equiv 2 \pmod{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a nonzero integer $i$, the exponent of $2$ in the prime factorization of $i$ is called $ord_2 (i)$. For example, $ord_2(9)=0$ since $9$ is odd, and $ord_2(28)=2$ since $28=2^2\times7$. The numbers $3^n-1$ for $n=1,2,3,\ldots$ are all even so $ord_2(3^n-1)>0$ for $n>0$.
a) For which positive integers $n$ is $ord_2(3^n-1) = 1$?
b) For which positive integers $n$ is $ord_2(3^n-1) = 2$?
c) For which positive integers $n$ is $ord_2(3^n-1) = 3$?
Prove your answers.
