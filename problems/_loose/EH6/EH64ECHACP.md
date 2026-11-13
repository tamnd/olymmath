---
tag: EH64ECHACP
kind: problem
type: answer
answer: 2^{19}-256
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $A=\{1,2, \ldots, 20\}$. Call $B$ a visionary set of $A$ if $B \subseteq A, B$ contains at least one even integer, and $|B| \in B$, where $|B|$ is the cardinality of set $B$. How many visionary sets does $A$ have?
