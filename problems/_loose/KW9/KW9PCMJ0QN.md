---
tag: KW9PCMJ0QN
kind: problem
type: answer
answer: A={1,2},B={3,4,5,6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the sets $A$ and $B$ for which the following five properties hold:

- $A \cup B=\{1,2,3,4,5,6\}$;
- $2 \in A \backslash B$;
- $3 \in B \backslash A$;
- $A \cap\{4,5,6\}=\varnothing$;
- $B \cap\{1\}=\varnothing$.
