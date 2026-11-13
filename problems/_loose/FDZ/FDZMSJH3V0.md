---
tag: FDZMSJH3V0
kind: problem
type: answer
answer: "997"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
C1 Let $F$ be a function which maps integers to integers by the following rules:
$F(n)=n-3$ if $n \geq 1000$;
$F(n)=F(F(n+5))$ if $n<1000$.
(a) Find $F(999)$.
(b) Show that $F(984)=F(F(F(1004)))$.
(c) Find $F(84)$.
