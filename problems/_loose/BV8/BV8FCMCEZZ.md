---
tag: BV8FCMCEZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all 9-digit natural numbers, which are written only with the digits 1, 2, and 3. Find all functions $f:S\rightarrow \{1,2,3\}$ which satisfy the following conditions:
(1) $f(111111111)=1$, $f(222222222)=2$, $f(333333333)=3$, $f(122222222)=1$;
(2) If $x,y\in S$ differ in each digit position, then $f(x)\neq f(y)$.
