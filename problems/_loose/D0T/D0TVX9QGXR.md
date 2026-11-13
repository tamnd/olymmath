---
tag: D0TVX9QGXR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h99387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35812
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Sequence $\{ a_n \}$ satisfies: $a_1=3$ , $a_2=7$ , $a_n^2+5=a_{n-1}a_{n+1}$ , $n \geq 2$ . If $a_n+(-1)^n$ is prime, prove that there exists a nonnegative integer $m$ such that $n=3^m$ .
