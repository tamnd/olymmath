---
tag: PMCJ9XD5K0
kind: problem
type: answer
answer: A\sqrt{100+n}=B\sqrt{100-}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A$ and $B$ are positive numbers, $B>A$. By increasing $A$ by $n\%$, we get $B$, and by decreasing $B$ by $c\%$, we get $A$. Prove that

$$
A \sqrt{100+n}=B \sqrt{100-c}
$$
