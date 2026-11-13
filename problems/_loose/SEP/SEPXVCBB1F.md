---
tag: SEPXVCBB1F
kind: problem
type: answer
answer: \{1000, 1000, 10, 7, 1\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sets of positive integers $A=\big\{ a_1,a_2,...a_{19}\big\}$ which satisfy the following:
$1\big) a_1+a_2+...+a_{19}=2017;$
$2\big) S(a_1)=S(a_2)=...=S(a_{19})$ where $S\big(n\big)$ denotes digit sum of number $n$.
