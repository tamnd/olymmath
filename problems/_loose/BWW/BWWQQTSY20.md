---
tag: BWWQQTSY20
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $(a_n)_{n\geq 1}$ by $a_1=1$, $a_2=p$ and $$a_{n+1}=pa_n-a_{n-1} \textrm { for all } n>1.$$
Prove that for $n>1$ the polynomial $x^n-a_nx+a_{n-1}$ is divisible by $x^2-px+1$.
Using this result, solve the equation $$x^4-56x+15=0.$$
