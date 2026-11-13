---
tag: TMWPSP6RD1
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
16.2 .46 * The decimal representation of a natural number $A$ is $a_{n} a_{n-1} \cdots a_{0}$. Let $f(A)=2^{n} a_{0}+2^{n-1} a_{1}+\cdots$ $+2 a_{n-1}+a_{n}$, and denote $A_{1}=f(A), A_{i+1}=f\left(A_{i}\right), i=1,2, \cdots, n$. Prove:
(1) There must be a $k \in \mathbf{N}$, such that $A_{k+1}=A_{k}$;
(2) If $A=19^{86}$, what is the value of the above $A_{k}$?
