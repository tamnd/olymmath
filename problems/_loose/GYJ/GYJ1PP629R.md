---
tag: GYJ1PP629R
kind: problem
type: answer
answer: m = 2^{\frac{n}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an even positive integer. Alice and Bob play the following game. Before the start of the game, Alice chooses a set $S$ containing $m$ integers and announces it to Bob. The players then alternate turns, with Bob going first, choosing $i\in\{1,2,\dots, n\}$ that has not been chosen and setting the value of $v_i$ to either $0$ or $1$. At the end of the game, when all of $v_1,v_2,\dots,v_n$ have been set, the expression $$E=v_1\cdot 2^0 + v_2 \cdot 2^1 + \dots + v_n \cdot 2^{n-1}$$ is calculated. Determine the minimum $m$ such that Alice can always ensure that $E\in S$ regardless of how Bob plays.
