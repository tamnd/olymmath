---
tag: NFAC0DJFCD
kind: problem
type: answer
answer: "103"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each positive integer number $n \ ge 1$ is assigned the number $p_n$ which is the product of all its non-zero digits. For example, $p_6 = 6$, $p_ {32} = 6$, $p_ {203} = 6$. Let $S = p_1 + p_2 + p_3 + \dots + p_ {999}$. Find the largest prime that divides $S $.
