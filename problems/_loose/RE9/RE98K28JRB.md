---
tag: RE98K28JRB
kind: problem
type: answer
answer: allpositiveeven
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a banquet, $n$ guests are invited, and they sit around a round table, with seats already marked by the host with numbers $1,2,3, \cdots, n$, a total of $n$ numbers. A waiter serves the guests according to a peculiar rule: after serving one guest, he moves counterclockwise a number of seats equal to the number on the card of the seat of the guest he just served, and then serves the guest at the newly arrived seat. Similarly, he moves counterclockwise a number of seats equal to the number on the card of the seat of the guest he just served.

Find all positive integers $n \geqslant 2$, such that the host can appropriately place these $n$ cards, and the waiter can properly choose a guest to start, and according to the above rule, serve each guest.
(2003 Italian Olympiad Problem)
