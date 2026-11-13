---
tag: MCZ6NDF8EC
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2021
    source: hf-mathnet
    label: Baltic Way Baltic Way 2021 Shortlist
---
Distinct positive integers $a$, $b$, $c$, $d$ satisfy
$$
\begin{cases}
a|b^2 + c^2 + d^2 \\
b|a^2 + c^2 + d^2 \\
c|a^2 + b^2 + d^2 \\
d|a^2 + b^2 + c^2
\end{cases} .
$$
Also it is known that none of them is larger than the product of three others. What is the largest possible number of primes among them?
