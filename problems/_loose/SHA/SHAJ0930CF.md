---
tag: SHAJ0930CF
kind: problem
type: answer
answer: (98,0,1,0,1),(98,0,0,1,1),(98,0,1,1,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2 Five mathematicians find a bag of 100 gold coins in a room. They agree to split up the coins according to the following plan:
- The oldest person in the room proposes a division of the coins among those present. (No coin may be split.) Then all present, including the proposer, vote on the proposal.
- If at least $50 \%$ of those present vote in favor of the proposal, the coins are distributed accordingly and everyone goes home. (In particular, a proposal wins on a tie vote.)
- If fewer than $50 \%$ of those present vote in favor of the proposal, the proposer must leave the room, receiving no coins. Then the process is repeated: the oldest person remaining proposes a division, and so on.
- There is no communication or discussion of any kind allowed other than what is needed for the proposer to state his or her proposal, and the voters to cast their vote.
Assume that each person wishes to maximize his or her share of the coins and behaves optimally. How much will each person get?
