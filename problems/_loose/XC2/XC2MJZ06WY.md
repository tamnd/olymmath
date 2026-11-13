---
tag: XC2MJZ06WY
kind: problem
type: answer
answer: "75"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Grogg and Winnie are playing a game using a deck of $50$ cards numbered $1$ through $50$. They take turns with Grogg going first. On each turn a player chooses a card from the deck-this choice is made deliberately, not at random-and then adds it to one of two piles (both piles are empty at the start of the game). After all $50$ cards are in the two piles, the values of the cards in each pile are summed, and Winnie wins the positive difference of the sums of the two piles, in dollars. (For instance, if the first pile has cards summing to $510$ and the second pile has cards summing to $765$, then Winnie wins $ \$255$.) Winnie wants to win as much as possible, and Grogg wants Winnie to win as little as possible. If they both play with perfect strategy, find (with proof) the amount that Winnie wins.
