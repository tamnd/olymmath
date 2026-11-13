---
tag: AAZK4J4FHW
kind: problem
type: answer
answer: "1089"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the decimal system, the reverse of the $(n+1)$-digit number $A=\overline{a_{n} a_{n-1} \ldots a_{1} a_{0}}$ is the number $A^{*}=\overline{a_{0} a_{1} \ldots a_{n}}$. (Thus, the reverse of 759 is 957, and the reverse of 980 is 89.)

Find the four-digit numbers that "reverse" when multiplied by 9, i.e., for which $9 A=A^{*}$.
