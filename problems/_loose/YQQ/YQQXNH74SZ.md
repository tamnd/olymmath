---
tag: YQQXNH74SZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1487717
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36616
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2017
    source: hf-ai-mo-aops
    label: 2017 South East Mathematical Olympiad
---
Let $a, b, c$ be real numbers, $a \neq 0$ . If the equation $2ax^2 + bx + c = 0$ has real root on the interval $[-1, 1]$ .
Prove that $$ \min \{c, a + c + 1\} \leq \max \{|b - a + 1|, |b + a - 1|\}, $$ and determine the necessary and sufficient conditions of $a, b, c$ for the equality case to be achieved.
