---
tag: 4TGCJRVWG0
kind: problem
type: answer
answer: 3,2,1,n\geqslant2;6,8,4,n\geqslant2;8,3,7,n=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The decimal representation of a natural number $a$ consists of $n$ identical digits $x$, the number $b$ - of $n$ identical digits $y$, and the number $c$ - of $2 n$ identical digits $z$. For any $n \geqslant 2$, find all such digits $x, y, z$ for which $a^{2}+b=c$.
