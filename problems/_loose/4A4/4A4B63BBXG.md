---
tag: 4A4B63BBXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish
---
There are $2^{2018}$ buckets placed in a circle. Their positions are numbered from $1$ to $2^{2018}$ according to their order in the circle. Initially only buckets at positions $2018$ and $2019$ are full of water, the others are empty.

Before the game starts, John is allowed to fill as many additional buckets as he wishes full of water. At the start of the game, John is given an integer $n$ ($0 \le n < 2018$) and two more buckets, one empty and the other full of water. John will then move around the circle, starting at position $2^n$ and moving forward by $2^n$ positions each time. At each position he reaches during his journey he has to replace the bucket he finds by one of those two he carries. He needs to replace an empty bucket by a full one and a full bucket by an empty one. If he cannot do so at any position he reaches, he lost the game.

Is it possible for John to fill the buckets before the start of the game in such a way that he will not lose the game, no matter which value of $n$ he will be given and no matter how long he will move in the circle?
