---
tag: C6Q59CRFEM
kind: problem
type: answer
answer: \frac{}{+n}C_{+2n-1}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Party A has $m$ beans, and Party B has $m+2n$ beans $(m, n \geqslant 1)$. A and B play a game by tossing a coin. If it lands heads, B gives A one bean; if it lands tails, A gives B one bean. If someone runs out of beans, the game ends. Let $A$ denote the set of all sequences of coin tosses that result in A losing all $m$ beans exactly on the $(m+2n)$-th coin toss. Try to find the number of sequences in $A$.
