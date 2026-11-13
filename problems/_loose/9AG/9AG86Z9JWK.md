---
tag: 9AG86Z9JWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $n$ is a positive integer and $x>0$, then

$$
\frac{\binom{2 n}{0}}{x}+\frac{\binom{2 n}{2}}{x+2}+\frac{\binom{2 n}{4}}{x+4}+\cdots+\frac{\binom{2 n}{2 n}}{x+2 n}>\frac{\binom{2 n}{1}}{x+1}+\frac{\binom{2 n}{3}}{x+3}+\frac{\binom{2 n}{5}}{x+5}+\cdots+\frac{\binom{2 n}{2 n-1}}{x+2 n-1}
$$
