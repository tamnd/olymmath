---
tag: A8T3V4BMVG
kind: problem
type: answer
answer: \lceil \frac{n}{2} \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Bank of Zürich issues coins with an $H$ on one side and a $T$ on the other side. Alice has $n$ of these coins arranged in a line from left to right. She repeatedly performs the following operation: if some coin is showing its $H$ side, Alice chooses a group of consecutive coins (this group must contain at least one coin) and flips all of them; otherwise, all coins show $T$ and Alice stops. For instance, if $n = 3$, Alice may perform the following operations: $THT \to HTH \to HHH \to TTH \to TTT$. She might also choose to perform the operation $THT \to TTT$.

For each initial configuration $C$, let $m(C)$ be the minimal number of operations that Alice must perform. For example, $m(THT) = 1$ and $m(TTT) = 0$. For every integer $n \geq 1$, determine the largest value of $m(C)$ over all $2^n$ possible initial configurations $C$.

*Massimiliano Foschi, Italy*
