---
tag: MYAC50XYVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fedir and Mykhailo have three piles of stones: the first contains $100$ stones, the second $101$, the third $102$. They are playing a game, going in turns, Fedir makes the first move. In one move player can select any two piles of stones, let's say they have $a$ and $b$ stones left correspondently, and remove $gcd(a, b)$ stones from each of them. The player after whose move some pile becomes empty for the first time wins. Who has a winning strategy?

As a reminder, $gcd(a, b)$ denotes the greatest common divisor of $a, b$.

*(Proposed by Oleksii Masalitin)*
