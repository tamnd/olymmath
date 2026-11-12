---
tag: TEGQYPN83S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2003
    source: hf-numina-olympiads
    label: JBMO-SL
---
Natural numbers 1,2,3, .., 2003 are written in an arbitrary sequence $a_{1}, a_{2}, a_{3}, \ldots a_{2003}$. Let $b_{1}=1 a_{1}, b_{2}=2 a_{2}, b_{3}=3 a_{3}, \ldots, b_{2003}=2003 a_{2003}$, and $B$ be the maximum of the numbers $b_{1}, b_{2}, b_{3}, \ldots, b_{2003}$.

a) If $a_{1}=2003, a_{2}=2002, a_{3}=2001, \ldots, a_{2002}=2, a_{2003}=1$, find the value of $B$.

b) Prove that $B \geq 1002^{2}$.
