---
tag: E0WA7P5MGY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1152633
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14449
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
In the $\textit{Fragmented Game of Spoons}$ , eight players sit in a row, each with a hand of four cards. Each round, the first player in the row selects the top card from the stack of unplayed cards and either passes it to the second player, which occurs with probability $\tfrac12$ , or swaps it with one of the four cards in his hand, each card having an equal chance of being chosen, and passes the new card to the second player. The second player then takes the card from the first player and chooses a card to pass to the third player in the same way. Play continues until the eighth player is passed a card, at which point the card he chooses to pass is removed from the game and the next round begins. To win, a player must hold four cards of the same number, one of each suit.

During a game, David is the eighth player in the row and needs an Ace of Clubs to win. At the start of the round, the dealer picks up a Ace of Clubs from the deck. Suppose that Justin, the fifth player, also has a Ace of Clubs, and that all other Ace of Clubs cards have been removed. The probability that David is passed an Ace of Clubs during the round is $\tfrac mn$ , where $m$ and $n$ are positive integers with $\gcd(m, n) = 1.$ Find $100m + n.$ *Proposed by David Altizio*
