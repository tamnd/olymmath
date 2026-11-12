---
tag: YKN6JP8KRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Near the end of a game of Fish, Celia is playing against a team consisting of Alice and Betsy. Each of the three players holds two cards in their hand, and together they have the Nine, Ten, Jack, Queen, King, and Ace of Spades (this set of cards is known by all three players). Besides the two cards she already has, each of them has no information regarding the other two's hands (In particular, teammates Alice and Betsy do not know each other's cards).

It is currently Celia's turn. On a player's turn, the player must ask a player on the other team whether she has a certain card that is in the set of six cards but *not* in the asker's hand. If the player being asked does indeed have the card, then she must reveal the card and put it in the asker's hand, and the asker shall ask again (but may ask a different player on the other team); otherwise, she refuses and it is now her turn. Moreover, a card may not be asked if it is known (to the asker) to be not in the asked person's hand. The game ends when all six cards belong to one team, and the team with all the cards wins. Under optimal play, the probability that Celia wins the game is $\frac{p}{q}$ for relatively prime positive integers $p$ and $q$ . Find $100p+q$ .

*Proposed by Yannick Yao*
