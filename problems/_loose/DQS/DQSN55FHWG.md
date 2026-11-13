---
tag: DQSN55FHWG
kind: problem
type: answer
answer: t = -1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $t\in \mathbb Z$ such that: exists a function $f:\mathbb Z^+\to \mathbb Z$ such that:
$f(1997)=1998$
$\forall x,y\in \mathbb Z^+ , \text{gcd}(x,y)=d : f(xy)=f(x)+f(y)+tf(d):P(x,y)$
