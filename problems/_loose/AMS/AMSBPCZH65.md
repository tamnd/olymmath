---
tag: AMSBPCZH65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927034
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2008
    source: hf-ai-mo-aops
    label: 2008 Princeton University Math Competition
---
A SET cards have four characteristics: number, color, shape, and shading, each of which has $3$ values. A SET deck has $81$ cards, one for each combination of these values. A SET is three cards such that, for each characteristic, the values of the three cards for that characteristics are either all the same or all different. In how many ways can you replace each SET card in the deck with another SET card (possibly the same), with no card used twice, such that any three cards that were a SET before are still a SET?
(Alternately, a SET card is an ordered $4$ -tuple of $0$ s, $1$ s, and $2$ s, and three cards form a SET if their sum is ( $0, 0, 0, 0$ ) mod $3$ , for instance, ( $0, 1, 2, 2$ ), ( $1, 0, 2, 1$ ), and ( $2, 2, 2, 0$ ) form a SET. How many permutations of the SET cards maintain SET-ness?)
