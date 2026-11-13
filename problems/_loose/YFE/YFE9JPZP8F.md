---
tag: YFE9JPZP8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of positive perfect squares that are of the form $\overline{AA}$, i.e. the concatenation of two equal integers $A$. (Integers are not allowed to start with zero.)

(a) Prove that $S$ is infinite.
(b) Does there exist a function $f:S\times S \rightarrow S$ such that if $a,b,c \in S$ and $a,b | c$, then $f(a,b) | c$? (If such a function $f$ exists, we call $f$ an LCM function)
