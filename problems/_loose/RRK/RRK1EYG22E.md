---
tag: RRK1EYG22E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ students with distinct names exchange greeting cards. Each person prepares $n-1$ envelopes, writing the names and addresses of the other $n-1$ students, and prepares at least one card signed with their own name. Each day, one student will send a card according to the following requirements: first, they choose a card from their hand (including received cards), place it in an unused envelope, ensuring the card's signature and the recipient's name are different, then send the card, which arrives on the same day. Prove: when all students are unable to send a card according to the above requirements,
(1) each person has at least one card in their hand;
(2) if at this point there exist $k$ students $P_{1}, P_{2}, \cdots, P_{k}$, such that $P_{k}$ has never sent a card to $P_{1}$, and $P_{i}$ has never sent a card to $P_{i+1}$ ($i=1,2, \cdots, k-1$), then these $k$ students initially prepared the same number of cards.
