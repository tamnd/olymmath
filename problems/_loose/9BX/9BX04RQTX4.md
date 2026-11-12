---
tag: 9BX04RQTX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h390069
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2002
    source: hf-ai-mo-aops
    label: 2002 Romania Team Selection Test
---
There are $n$ players, $n\ge 2$ , which are playing a card game with $np$ cards in $p$ rounds. The cards are coloured in $n$ colours and each colour is labelled with the numbers $1,2,\ldots ,p$ . The game submits to the following rules:

each player receives $p$ cards.
the player who begins the first round throws a card and each player has to discard a card of the same colour, if he has one; otherwise they can give an arbitrary card.
the winner of the round is the player who has put the greatest card of the same colour as the first one.
the winner of the round starts the next round with a card that he selects and the play continues with the same rules.
the played cards are out of the game.

Show that if all cards labelled with number $1$ are winners, then $p\ge 2n$ .

*Barbu Berceanu*
