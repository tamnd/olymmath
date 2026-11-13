---
tag: HTG7SVD5QZ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play the following number-guessing game. Alice writes down a list of positive integers $x_{1}$, $\cdots$, $x_{n}$, but does not reveal them to Bob, who will try to determine the numbers by asking Alice questions. Bob chooses a list of positive integers $a_{1}$, $\cdots$, $a_{n}$ and asks Alice to tell him the value of $a_{1}x_{1}+\cdots+a_{n}x_{n}$. Then Bob chooses another list of positive integers $b_{1}$, $\cdots$, $b_{n}$ and asks Alice for $b_{1}x_{1}+\cdots+b_{n}x_{n}$. Play continues in this way until Bob is able to determine Alice's numbers. How many rounds will Bob need in order to determine Alice's numbers?
