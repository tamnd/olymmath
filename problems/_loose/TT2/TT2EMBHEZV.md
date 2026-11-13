---
tag: TT2EMBHEZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arnaldo and Bernaldo decide to play a game that has a limited number of moves. Arnaldo writes the number 1 on the board in his first move. Then, Bernaldo writes 2 or 4 on the board. After that, Arnaldo writes 3 or 9 on the board. The two continue playing alternately, maintaining the rule that on move $n$, the player writes $n$ or $n^{2}$ on the board. Arnaldo wins the game if, after the last move, the sum of the numbers on the board is divisible by 3. If the sum is not divisible by 3, then Bernaldo wins.

a) Suppose the game ends on move 15. Show that Bernaldo can guarantee a win.

b) Suppose the game ends on move 7. In this case, which of the two players can always guarantee a win regardless of how their opponent plays? How should they play to win?
