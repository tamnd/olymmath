---
tag: 3EZ66Y9XGD
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2,3,4,5\}$. How many functions $f: \mathscr{P}(A) \backslash\{\varnothing\} \rightarrow A$ satisfy $f(B) \in B$ and $f(B \cup C) \in\{f(B), f(C)\}$ for all non-empty subsets $B$ and $C$ of $A$?
