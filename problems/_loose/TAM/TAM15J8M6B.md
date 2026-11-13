---
tag: TAM15J8M6B
kind: problem
type: answer
answer: 42,100,199,(q+1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The symbol $n$ ! represents the product of the positive integers from 1 to $n$. That is, $n!=n \times(n-1) \times(n-2) \times \cdots \times 3 \times 2 \times 1$. (The symbol $n$ ! is read " $n$ factorial".) For example, the value of 4 ! is 24 because $4 \times 3 \times 2 \times 1=24$.
(a) Determine the value of $\frac{7!}{5!}$.
(b) Determine the positive integer $n$ for which $98!\times 9900=n$ ! .
(c) Determine the positive integer $m$ for which $\frac{(m+2)!}{m!}=40200$.
(d) Suppose that $q$ is a positive integer and that $r$ is the number for which $(q+2)!-(q+1)!=(q!) \times r$. Show that, for every positive integer $q$, the number $r$ is an integer which is a perfect square.
