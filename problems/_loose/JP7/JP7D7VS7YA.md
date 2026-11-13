---
tag: JP7D7VS7YA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a movie theatre there are $6$ VIP chairs labelled from $1$ to $6$. We call a few consecutive vacant chairs a block. In the online VIP seat reservation process the reservation of a seat consists of two steps: in the first step we choose the block, in the second step we reserve the first, last or middle seat (in case of a block of size even this means the middle chair with the smaller number) of that block. (In the second step the online system offers the three possibilities even though they might mean the same seat.) Benedek reserved all seats at some screeining. In how many ways could he do it if we distinguish two reservation if there were a step when Benedek chose a different option?

For instance, if the seats $ 1$ and $6$ are reserved, then there are two blocks, the first one consists of the seat $ 1$, the second block consists of the seats $3, 4$ and $5$. Two reservation orders are different if there is a chair that was reserved in a different step, or there is a chair that was reserved with different option (first, last or middle). So if there were $2$ VIP chairs, then the answer would have been $9$.
