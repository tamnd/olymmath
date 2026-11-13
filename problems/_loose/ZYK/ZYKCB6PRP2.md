---
tag: ZYKCB6PRP2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $S$ be the set of positive integers not divisible by $p^4$ for all primes $p$ . Anastasia and Bananastasia play a game.

At the beginning, Anastasia writes down the positive integer $N$ on the board. Then the players take moves in turn; Bananastasia moves first. On any move of his, Bananastasia replaces the number $n$ on the blackboard with a number of the form $n-a$ , where $a\in S$ is a positive integer. On any move of hers, Anastasia replaces the number $n$ on the blackboard with a number of the form $n^k$ , where $k$ is a positive integer. Bananastasia wins if the number on the board becomes zero.

Compute the second-smallest possible value of $N$ for which Anastasia can prevent Bananastasia from winning.

*Proposed by Brandon Wang and Vincent Huang*
