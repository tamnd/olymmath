---
tag: EA1W8JBQEH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}, a_{1}=a_{2}=1, a_{n+2}=a_{n+1}+a_{n}(n=1,2, \cdots)$, prove that for any natural number $n$ there is $\operatorname{arccot} a_{n} \leqslant \operatorname{arccot} a_{n+1}+\operatorname{arccot} a_{n+2}$, and specify the condition under which equality holds.
