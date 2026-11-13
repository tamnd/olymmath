---
tag: PDR8PMPX4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133857
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An underground burrow consists of an infinite sequence of rooms labeled by the integers $(\ldots,-3,-2,-1,0,1,2,3, \ldots)$. Initially, some of the rooms are occupied by one or more rabbits.
Each rabbit wants to be alone. Thus, if there are two or more rabbits in the same room (say, room $m$ ), half the rabbits (rounding down) will flee to room $m-1$, and half (also rounding down) to room $m+1$. Once per minute, this happens simultaneously in all rooms that have two or more rabbits. For example, if initially all rooms are empty except for 5 rabbits in room \#12 and 2 rabbits in room \#13, then after one minute, rooms \#11-\#14 will contain $2,2,2$, and 1 rabbits, respectively, and all other rooms will be empty.
Now suppose that initially there are $k+1$ rabbits in room $k$ for each $k=0,1,2, \ldots, 9,10$, and all other rooms are empty.
(a) Show that eventually the rabbits will stop moving.
(b) Determine which rooms will be occupied when this occurs.
