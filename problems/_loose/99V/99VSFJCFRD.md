---
tag: 99VSFJCFRD
kind: problem
type: answer
answer: "33860"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximal possible $n$, where $A_1, \dots, A_n \subseteq \{1, 2, \dots, 2016\}$ satisfy the following properties.
- For each $1 \le i \le n$, $\lvert A_i \rvert = 4$.
- For each $1 \le i < j \le n$, $\lvert A_i \cap A_j \rvert$ is even.
