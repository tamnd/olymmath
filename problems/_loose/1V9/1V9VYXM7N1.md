---
tag: 1V9VYXM7N1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 BMT Spring
    url: https://artofproblemsolving.com/community/c6h510749
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2012
    source: hf-ai-mo-aops
    label: 2012 BMT Spring
---
Bowling Pins is a game played between two players in the following way:
We start with $ 14 $ bowling pins in a line: $ X X X X X X X X X X X X X X $ Players alternate turns. On each turn, the player can knock down one, two or three consecutive pins
at a time. For example:

Jing Jing bowls: $ X X \:\:\:\: X X X X X X X X X X $ Soumya bowls: $ X X \:\:\:\: X X X X X X X X X $ Jing Jing bowls again: $ X X \:\:\:\: X X X X X \:\: X $ The player who knocks down the last pin wins.
In the above game, it is Soumya's turn. If he plays perfectly from here, he has a winning strategy (In
fact, he has four diﬀerent winning moves.)
Imagine it's Jing Jing's turn to play and the game looks as follows $ X \:\: X\dots $ with 1 X on the left and a string of $ k $ consecutive X's on the right.
For what values of $ k $ from $ 1 $ to $ 10 $ does she have a winning strategy?
