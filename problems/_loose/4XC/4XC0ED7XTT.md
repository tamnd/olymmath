---
tag: 4XC0ED7XTT
kind: problem
type: answer
answer: "29985"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given triangle $ABC$. Let $A_1B_1$, $A_2B_2$,$ ...$, $A_{2008}B_{2008}$ be $2008$ lines parallel to $AB$ which divide triangle $ABC$ into $2009$ equal areas. Calculate the value of $$ \left\lfloor \frac{A_1B_1}{2A_2B_2} + \frac{A_1B_1}{2A_3B_3} + ... + \frac{A_1B_1}{2A_{2008}B_{2008}} \right\rfloor$$
