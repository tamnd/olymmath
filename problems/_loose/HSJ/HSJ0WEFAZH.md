---
tag: HSJ0WEFAZH
kind: problem
type: answer
answer: (2009,1008)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting with the input $(m, n)$, Machine A gives the output $(n, m)$.

Starting with the input $(m, n)$, Machine B gives the output $(m+3 n, n)$.

Starting with the input $(m, n)$, Machine C gives the output $(m-2 n, n)$.

Natalie starts with the pair $(0,1)$ and inputs it into one of the machines. She takes the output and inputs it into any one of the machines. She continues to take the output that she receives and inputs it into any one of the machines. (For example, starting with $(0,1)$, she could use machines B, B, A, C, B in that order to obtain the output $(7,6)$.) Which of the following pairs is impossible for her to obtain after repeating this process any number of times?
(A) $(2009,1016)$
(D) $(2009,1008)$
(B) $(2009,1004)$
(E) $(2009,1032)$
(C) $(2009,1002)$
