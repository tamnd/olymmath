---
tag: 5YB3VCGR9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a posititve integer and let $M$ the set of all all integer cordinates $(a,b,c)$ such that $0 \le a,b,c \le n$. A frog needs to go from the point $(0,0,0)$ to the point $(n,n,n)$ with the following rules:
$\cdot$ The frog can jump only in points of $M$
$\cdot$ The frog can't jump more than $1$ time over the same point.
$\cdot$ In each jump the frog can go from $(x,y,z)$ to $(x+1,y,z)$, $(x,y+1,z)$, $(x,y,z+1)$ or $(x,y,z-1)$
In how many ways the Frog can make his target?
