---
tag: BGY0VT54RD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are the real line and the two unique marked points $0$ and $1$. We can perform as many times as we want the following operation: we take two already marked points $a$ and $b$ and mark the reflection of $a$ over $b$. Let $f(n)$ be the minimum number of operations needed to mark on the real line the number $n$ (which is the number at a distance $\left| n\right|$ from $0$ and it is on the right of $0$ if $n>0$ and on the left of $0$ if $n<0$). For example, $f(0)=f(1)=0$ and $f(-1)=f(2)=1$. Find $f(n)$.
