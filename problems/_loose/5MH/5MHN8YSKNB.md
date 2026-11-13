---
tag: 5MHN8YSKNB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $100$ people in a queue waiting to enter a hall. The hall has exactly $100$ seats numbered from $1$ to $100$. The first person in the queue enters the hall, chooses any seat and sits there. The $n$-th person in the queue, where $n$ can be $2, . . . , 100$, enters the hall after $(n-1)$-th person is seated. He sits in seat number $n$ if he finds it vacant; otherwise he takes any unoccupied seat. Find the total number of ways in which $100$ seats can be filled up, provided the $100$-th person occupies seat number $100$.
