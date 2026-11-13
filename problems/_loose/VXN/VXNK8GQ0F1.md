---
tag: VXNK8GQ0F1
kind: problem
type: answer
answer: \left \lfloor{\sqrt{2k}} \right \rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k\geq 0$ an integer. The sequence $a_0,\ a_1,\ a_2, \ a_3, \ldots$ is defined as follows:
[LIST]

- $a_0=k$ [/*]

- For $n\geq 1$, we have that $a_n$ is the smallest integer greater than $a_{n-1}$ so that $a_n+a_{n-1}$ is a perfect square. [/*]
[/LIST]
Prove that there are exactly $\left \lfloor{\sqrt{2k}} \right \rfloor$ positive integers that cannot be written as the difference of two elements of such a sequence.
*Note.* If $x$ is a real number, $\left \lfloor{x} \right \rfloor$ denotes the greatest integer smaller or equal than $x$.
