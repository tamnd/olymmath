---
tag: Y1ZD1VGV0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bored of waiting for his plane to travel to the International Mathematics Olympiad, Daniel began to write powers of $2$ in a list in his notebook as follows:
$\bullet$ Starting with the number $1$, Daniel writes the next power of $2$ at the end of his list and reverses the order of the numbers in the list.
Let us call such a modification of the list, including the first step, a *move*. The list in each of the first $4$ moves it looks like this:
$$1 \,\,\, \to 2, 1 \,\,\, \,\,\, \to 4, 1, 2 \,\,\, \,\,\, \to 8, 2, 1, 4$$
Daniel plans to carry out operations until his plane arrives, but he is worried let the list grow too. After $2020$ moves, what is the sum of the first $1010$ numbers?
