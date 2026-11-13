---
tag: 4SZX2GRXD7
kind: problem
type: answer
answer: \frac{1000001}{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate
$$
\sqrt[1000]{1000^{1000}+\binom{1000}{1} 1000^{998}+\binom{1000}{2} 1000^{996}+\cdots+\binom{1000}{999} 1000^{-998}+1000^{-1000}} .
$$
