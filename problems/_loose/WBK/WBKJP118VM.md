---
tag: WBKJP118VM
kind: problem
type: answer
answer: x\in(0;1/3)\cup(1/2;+\infty)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The domain of valid values for the inequality $(0 ; 1 / 3) \cup(1 / 3 ;+\infty)$. The inequality is equivalent to

$$
\log _{3 x}(x+1)<1 \Longleftrightarrow(3 x-1)(x+1-3 x)<0 \Longleftrightarrow(3 x-1)(1-2 x)<0
$$

From this, taking into account the domain of valid values of the original inequality, we get $x \in(0 ; 1 / 3) \cup(1 / 2 ;+\infty)$.
