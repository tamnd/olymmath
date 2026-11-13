---
tag: 3H019GRGQP
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all even natural numbers $n$ for which

$$
\left|\log _{0.5} 20^{\cos \pi}+\log _{0.5} 30^{\cos 2 \pi}+\log _{0.5} 42^{\cos 3 \pi}+\cdots+\log _{0.5}\left(n^{2}+7 n+12\right)^{\cos n \pi}\right|=1
$$
