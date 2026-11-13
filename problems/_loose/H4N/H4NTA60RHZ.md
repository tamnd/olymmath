---
tag: H4NTA60RHZ
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given five-element sets $A_{1}, A_{2}, \cdots, A_{10}$, any two of these ten sets have an intersection with at least two elements. Let $A=\bigcup_{i=1}^{10} A_{i}=\left\{x_{1}, x_{2}, \cdots, x_{n}\right\}$, for any $x_{i} \in A$, the number of sets among $A_{1}, A_{2}, \cdots, A_{10}$ that contain the element $x_{i}$ is $k_{i}(i=1,2, \cdots, n)$, and let $m=$ $\max \left\{k_{1}, k_{2}, \cdots, k_{n}\right\}$. Find the minimum value of $m$.
