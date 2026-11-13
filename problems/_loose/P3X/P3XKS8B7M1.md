---
tag: P3XKS8B7M1
kind: problem
type: answer
answer: "502"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2010
    source: hf-mathnet
    label: Ukraine 50th Mathematical Olympiad in Ukraine, Fourth Round (March 23, 2010)
---
Andriy has cards which are the same from one side, and numbers $1, 3, 5, \ldots, 2009$ are written on the other side. Lesya has the same cards but with numbers $2, 4, 6, \ldots, 2010$. Lesya places cards with numbers down (so we can not see them at the beginning), after that Andriy places his cards on the Lesya's (so, each Lesya's card is covered by exactly one Andriy's card). So we get $1005$ pairs of cards. After that, we compare numbers in pairs and add $1$ point to the person, who has greater number. Andriy knows, that Lesya places cards in increasing order starting from some place and after she gets $2010$, Lesya starts placing cards in increasing order again, starting from the least number which has not appeared before.
For example: $20, 22, 24, \ldots, 2010, 2, 4, \ldots, 18$. Andriy wants to get as many points as he can. What is the maximum number of points can he guarantee to get?
