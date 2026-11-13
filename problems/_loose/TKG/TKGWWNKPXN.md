---
tag: TKGWWNKPXN
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the recursive sequence $\left\{F_{n}\right\}$:
$$
F_{0}=0, F_{1}=1 \text {, }
$$
$F_{n}(n \geqslant 2)$ is the remainder of $F_{n-1}+F_{n-2}$ divided by 3, i.e., the sequence $\left\{F_{n}\right\}: 0,1,1,2,0,2,2,1,0, \cdots$.
Then the value of $\sum_{i=2017}^{2024} F_{i}$ is $( $.
(A) 6
(B) 7
(C) 8
(D) 9
(E) 10
