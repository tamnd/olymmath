---
tag: P8ZPTRZB5N
kind: problem
type: answer
answer: 2<E\xi\leqslant4-(\frac{1}{2})^{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
18 (15 points) Two people, A and B, are playing a certain game. The rules state that the winner of each round gets 1 point, and the loser gets 0 points; the game ends when one person's score is 2 points higher than the other's, and that person wins the game. It is also stipulated that the maximum number of rounds is 20; after 20 rounds, the person with the higher score wins the game, and if the scores are equal, it is a draw. It is known that the probability of A winning each round is $p(0<p<1)$, and the probability of B winning is $q=1-p$. Assuming the results of each round are independent, the game ends after $\xi$ rounds. Find the range of the expected value $E \xi$ of $\xi$.
